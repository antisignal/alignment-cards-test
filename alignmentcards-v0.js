export const categories = [
  {
    "code": "AT",  //two characters upper case - these also appear in corresponding cards
    "name": "name of category", 
    "pathology": "in general, what problem do alignment mechanisms in this category address", 
    "color": "#E6FFE9", //include for later use color coding categories
    "description": "Extended description of the whole category."
  }
]

export const cards = [{
  "category": "AT",
  "name": "honesty",
  "definition": "loremipsum",
  "people": "loremipsum",
  "peopleref": "OPTIONAL URL reference https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
  "organizational": "loremipsum",
  "organizationalref": "OPTIONAL",
  "professionals": "loremipsum",
  "professionalref": "OPTIONAL",
  "machine": "loremipsum",
  "machineref": "OPTIONAL",
  "failureModes": {
    "human": "loremipsum",
    "organizational": "loremipsum",
    "experts": "loremipsum",
    "machine": "loremipsum"
  },
    "expand": {
    "human": "loremipsum",
    "organizational": "loremipsum",
    "experts": "loremipsum",
    "machine": "loremipsum"
  }
}]
