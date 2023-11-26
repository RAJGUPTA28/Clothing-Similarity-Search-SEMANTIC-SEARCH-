# Clothing Similarity Search



![Sample Image](https://github.com/RAJGUPTA28/Clothing-Search/blob/main/Frontend/searching.jpeg)
## Overview:

The goal of this project is to create a machine learning model capable of receiving text describing a clothing item and returning a ranked list of links to similar items from different websites. Your solution must be a function deployed on Google Cloud that accepts a text string and returns JSON responses with ranked suggestions.


## What Is Semantic Search?
Semantic search describes a search engine’s attempt to generate the most accurate SERP results possible by understanding based on searcher intent, query context, and the relationship between words.

## Steps:
-----


1. Collect and preprocess data.

-Use web scraping tools to gather a dataset of clothing item descriptions and their corresponding URLs from multiple e-commerce websites. Ensure that the dataset is balanced and diverse, including various types of clothing from different brands and retailers.

-Preprocess the text data by cleaning it (remove special characters, lowercasing, etc.), and possibly by applying some form of text normalization (like stemming or lemmatization).

2. Measure similarity.

-Develop a method for extracting useful features from the text descriptions. This could involve using techniques like TF-IDF, word embeddings (Word2Vec, GloVe), or more advanced techniques like transformer-based models (BERT, GPT).

-Implement a method to compute the similarity between the input text and the texts in your database. This could be done using methods like cosine similarity or Jaccard similarity.

3. Return ranked results.

-Design a function that accepts a text string, extracts its features, computes similarities with the items in the database, ranks them based on similarity, and returns the URLs of the top-N most similar items.

4. Deploy the function.

-Deploy your function on Google Cloud Functions or Google Cloud Run.



## Demonstration Video
- https://drive.google.com/drive/folders/1RzSzhCJo2gZOTw0dfXvN8sx_FpXTytZW
