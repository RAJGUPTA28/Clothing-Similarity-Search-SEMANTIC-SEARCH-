# Semantic Search with Pinecone Database


This repository contains an implementation of semantic search using the Pinecone database. It leverages the Sentence Transformer library, Pinecone client, and NLTK for natural language processing.

## Semantic Search

Semantic search is a technique used to retrieve information based on the meaning or context rather than relying solely on keyword matching. It aims to understand the intent behind a query and retrieve relevant results that are semantically similar.

In this project, we use the Sentence Transformer model to encode sentences into dense vectors that capture the semantic meaning. The `all-MiniLM-L6-v2` model from SentenceTransformer is used for this purpose. It is a pre-trained language model fine-tuned on a large corpus of text data.


To run this project, you need to install the required dependencies. 
- numpy 
- pandas 
- spacy
- nltk
- pinecone-client
- sentence_transformers

## Cleaning of Dataset

The clean_text function performs several cleaning operations on the input text:
It replaces any HTML characters or tags with a space.
It removes punctuation marks from the text.
It retains only alphabets and numerics, removing any special characters or symbols.
It replaces newline characters with a space.
It converts the text to lowercase.
It splits the text into individual words, removes any extra spaces, and joins the words back together.


The lemmatize_words function lemmatizes the words in the input text. Lemmatization is the process of reducing words to their base or root form, typically by considering the word's part of speech


## Pinecone Database

[Pinecone](Pinecone.png) is a vector database that provides a scalable and efficient solution for similarity search. It allows us to store and retrieve high-dimensional vectors, making it ideal for semantic search tasks.



## Connection

1. Start by initializing the Pinecone client and creating a connection to the Pinecone database:

import pinecone

2. Initialize the Pinecone client
pinecone.init(api_key="YOUR_API_KEY")

3. Create a connection to the Pinecone database
pinecone.create_index(index_name="semantic_search_index", dimension=384)







