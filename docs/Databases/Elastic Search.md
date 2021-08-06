# Elastic Search

**Create new index with mapping**

PUT [http://localhost:9200/mtfanapi/](http://localhost:9200/mtfanapi/)

{

"mappings": {

"venues": {

"properties": {

"externalId": {

"type": "string"

},

"id": {

"type": "string"

},

"name": {

"type": "string"

},

"location": {

"type": "geo_point"

}

}

}

}

}

**Search index**

[http://localhost:9201/mtfanapi/venues/](http://localhost:9201/mtfanapi/venues/)_search

{

"query": {

"bool": {

"must": [

{

"wildcard": {

"venues.country": "*rasil"

}

}

],

"must_not": [],

"should": []

}

}

}

**Delete a index**

[http://localhost:9201/mtfanapi/venues/](http://localhost:9201/mtfanapi/venues/)_query

{

"query": {

"bool": {

"must": [

{

"wildcard": {

"venues.country": "*xico"

}

}

],

"must_not": [],

"should": []

}

}

}