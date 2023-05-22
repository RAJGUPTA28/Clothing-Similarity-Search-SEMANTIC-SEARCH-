import pinecone
from flask import Flask, request
from sentence_transformers import SentenceTransformer
from flask_cors import CORS, cross_origin

model = SentenceTransformer('all-MiniLM-L6-v2')
pinecone.init(api_key='a50af583-55c1-4cfc-8798-db0b892882ca' ,environment = 'us-west4-gcp-free')
pinecone_index = pinecone.Index(index_name='clothdesc')

app = Flask(__name__)

@app.route("/")
@cross_origin()
def home():
    # request_json = request.get_json()
    if request.args and 'text' in request.args:
        searchText = request.args.get('text')
        xq = model.encode([searchText]).tolist()
        result = pinecone_index.query(xq ,top_k = 10 , include_metadata=True)
        result_dict = result.to_dict()
        return result_dict
    else:
        return f'Clothing Search'