
# coding: utf-8

# # Publications markdown generator for academicpages
# 
# Takes a TSV of publications with metadata and converts them for use with [academicpages.github.io](academicpages.github.io). This is an interactive Jupyter notebook, with the core python code in publications.py. Run either from the `markdown_generator` folder after replacing `publications.tsv` with one that fits your format.
# 
# TODO: Make this work with BibTex and other databases of citations, rather than Stuart's non-standard TSV format and citation style.
# 

# ## Data format
# 
# The TSV needs to have the following columns: pub_date, title, venue, excerpt, citation, site_url, and paper_url, with a header at the top. 
# 
# - `excerpt` and `paper_url` can be blank, but the others must have values. 
# - `pub_date` must be formatted as YYYY-MM-DD.
# - `url_slug` will be the descriptive part of the .md file and the permalink URL for the page about the paper. The .md file will be `YYYY-MM-DD-[url_slug].md` and the permalink will be `https://[yourdomain]/publications/YYYY-MM-DD-[url_slug]`


# ## Import pandas
# 
# We are using the very handy pandas library for dataframes.

# In[2]:




import bibtexparser
from bibtexparser.bparser import BibTexParser
from bibtexparser.bwriter import BibTexWriter
from bibtexparser.bibdatabase import BibDatabase
from bibtexparser.customization import convert_to_unicode

with open('citations.bib') as bibtex_file:
    parser = BibTexParser()
    parser.customization = convert_to_unicode
    bib_database = bibtexparser.load(bibtex_file, parser = parser)
    print(bib_database.entries)

publications = bib_database.entries;

html_escape_table = {
    "&": "&amp;",
    '"': "&quot;",
    "'": "&apos;"
    }

def html_escape(text):
    """Produce entities within text."""
    return "".join(html_escape_table.get(c,c) for c in text)


# ## Creating the markdown files
# 
# This is where the heavy lifting is done. This loops through all the rows in the TSV dataframe, then starts to concatentate a big string (```md```) that contains the markdown for each type. It does the YAML metadata first, then does the description for the individual page. If you don't want something to appear (like the "Recommended citation")

# In[5]:

import os
for item in publications:
    
    md_filename = str(item["year"]) + "-" + item["ID"].replace(":","-") + ".md"
    html_filename = item["ID"].replace(":","-")
    year = item["year"]

    db = BibDatabase();
    writer = BibTexWriter()
    db.entries = [item];

    with open("../files/bibtex/" + html_filename + ".bib", 'w') as bibfile:
        bibfile.write(writer.write(db));


    md = "---\ntitle: \""   + item["title"] + '"\n'
    
    md += """collection: publications"""
    
    md += """\npermalink: /publication/""" + (str(item["year"]) + "-" + item["ID"].replace(":","-"))
    #md += """\nexcerpt: 'test'"""
    
    if("author" in item):
        authstr = item["author"];
        authors = "";
        numcommas = 0;
        if ("," in item["author"]):
          numcommas += 1
          authstrauthors = authstr.split(" and ")
          for ia, author in enumerate(authstrauthors):
            if ("," in author):
              authorparts = author.split(", ")
              # the first part [0] is last name, needs to become last
              # get and remove the first part, then append it as last
              lastname = authorparts.pop(0)
              authorparts.append(lastname)
              authorfirstlast = " ".join(authorparts)
              authstrauthors[ia] = authorfirstlast
          authors = ", ".join(authstrauthors);
        else:
          authors = item["author"];
        authors = authors.replace('{\lowercase{d}a F}','da F');
        md += "\nauthors: \""  + html_escape(authors)+'"';

    md += "\ndate: " + str(item["year"])+"-01-01";
    
    venues = [];

    if("journal" in item):
        venues.append("<i>"+item["journal"]+"<\i>");
        if("volume" in item):
            venues.append("v. "+item["volume"]);
        if("number" in item):
            venues.append("n. "+item["number"]);
        if("pages" in item):
            venues.append("p. "+item["pages"]);
        venue = ", ".join(venues);
        md += "\nvenue: '" + html_escape(venue) + "'";

    md += "\nbibtex: \""   + html_filename + ".bib\"";
    
    if "link" in item:
        md += "\npaperurl: '" + item["link"] + "'";
    
    if "doi" in item:
        md += "\ndoi: " + item["doi"];
    #md += "\ncitation: '" + "BibTex" + "'";
    
    md += "\n---";
    
    ## Markdown description for individual page
    
    #md += "\n[BibTex](http://filipinascimento.github.io/files/bibtex/" + html_filename + ".bib" + ")\n" 
        
    md_filename = os.path.basename(md_filename)
       
    with open("../_publications/" + md_filename, 'w') as f:
        f.write(md)


