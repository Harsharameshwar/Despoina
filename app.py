from flask import Flask, request
from flask_cors import CORS
import pandas as pd
import io
import base64
import matplotlib.pyplot as plt
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


@app.route('/api/plot')
def generate_plot():
    fig1, ax1 = plt.subplots()
    ax1.plot([1, 2, 3, 4], [1, 4, 2, 3])
    ax1.set_title('Graph 1')
# ... plot your data on ax1 ...
# Save the image to a BytesIO object
    image_data1 = io.BytesIO()
    plt.savefig(image_data1, format='png')
    plt.close(fig1)
# Convert the image data to base64 string
    image_base64_1 = base64.b64encode(image_data1.getvalue()).decode('utf-8')

# Generate the second image
    fig2, ax2 = plt.subplots()
    ax2.plot([1, 2, 3, 4], [1, 2, 3, 4])
    ax2.set_title('Graph 2')
# ... plot your data on ax2 ...
    image_data2 = io.BytesIO()
    plt.savefig(image_data2, format='png')
    plt.close(fig2)
    image_base64_2 = base64.b64encode(image_data2.getvalue()).decode('utf-8')

# Return the base64 strings as a JSON response
    return {
    'image1': image_base64_1,
    'image2': image_base64_2,
    }


if __name__ == '__main__':
    app.run(port=5001)
