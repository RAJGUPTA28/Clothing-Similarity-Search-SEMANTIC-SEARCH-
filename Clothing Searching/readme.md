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


## Pinecone Database

[Pinecone](Pinecone.png) is a vector database that provides a scalable and efficient solution for similarity search. It allows us to store and retrieve high-dimensional vectors, making it ideal for semantic search tasks.



## Connection

1. Start by initializing the Pinecone client and creating a connection to the Pinecone database:

import pinecone

2. Initialize the Pinecone client
pinecone.init(api_key="YOUR_API_KEY")

3. Create a connection to the Pinecone database
pinecone.create_index(index_name="semantic_search_index", dimension=384)







