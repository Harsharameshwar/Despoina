from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import io
app = Flask(__name__)
app.debug = True
CORS(app)  # allow cross-origin requests

@app.route('/upload', methods=['POST'])
def upload():
    file_data = request.get_data(as_text=False)  # Retrieve the file data as raw bytes
    content_length = int(request.headers.get('Content-Length', 0))  # Get the Content-Length header value

    # Check if all bytes are received
    if len(file_data) < content_length:
        return {'error': 'Incomplete file data'}, 400

    # Convert file data to DataFrame
    df = pd.read_csv(io.BytesIO(file_data))

    # Process the DataFrame as needed
    print(df)

    return {'message': 'File data received and processed successfully'}



if __name__ == '__main__':
    app.run(port=5001)
