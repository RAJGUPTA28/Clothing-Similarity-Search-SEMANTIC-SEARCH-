# Semantic Search with Pinecone Database

![Semantic Search]([path_to_image](https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.searchenginejournal.com%2Fwp-content%2Fuploads%2F2022%2F02%2Fsemantic-search-6214db3c88d4b-sej.png&tbnid=HPAwKZwrcRrA6M&vet=12ahUKEwjC29WOgYn_AhUpALcAHWRiA40QMygGegUIARDrAQ..i&imgrefurl=https%3A%2F%2Fwww.searchenginejournal.com%2Fsemantic-search-how-it-works-who-its-for%2F438960%2F&docid=6bWU3YMnHgnhRM&w=1600&h=840&q=semantic%20search&ved=2ahUKEwjC29WOgYn_AhUpALcAHWRiA40QMygGegUIARDrAQ))

This repository contains an implementation of semantic search using the Pinecone database. It leverages the Sentence Transformer library, Pinecone client, and NLTK for natural language processing.

## Semantic Search

Semantic search is a technique used to retrieve information based on the meaning or context rather than relying solely on keyword matching. It aims to understand the intent behind a query and retrieve relevant results that are semantically similar.

In this project, we use the Sentence Transformer model to encode sentences into dense vectors that capture the semantic meaning. The `all-MiniLM-L6-v2` model from SentenceTransformer is used for this purpose. It is a pre-trained language model fine-tuned on a large corpus of text data.

## Pinecone Database

[Pinecone](https://www.pinecone.io/) is a vector database that provides a scalable and efficient solution for similarity search. It allows us to store and retrieve high-dimensional vectors, making it ideal for semantic search tasks.

## Installation

To run this project, you need to install the required dependencies. 
numpy 
pandas 
spacy
nltk
pinecone-client
sentence_transformers



