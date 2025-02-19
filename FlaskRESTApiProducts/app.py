from flask import Flask, jsonify, request

app = Flask(__name__)

from products import products

@app.route('/ping')
def ping():
    return jsonify({"message": "pong!"})

@app.route('/products')
def getProducts():
    return jsonify({
        "message": "Product's List",
        "data": products 
    })
@app.route('/products/<string:product_name>')
def getOneProduct(product_name):

    products_found = [ product for product in products if product["name"] == product_name]

    if len(products_found) > 0:
        return jsonify({
            "message": "Product found",
            "data": products_found[0]
        })
    else:
        return jsonify({
            "message": "Product not found"
        })
@app.route('/products', methods=['POST'])
def addProduct():
    new_product = {
        "name": request.json["name"],
        "price": request.json["price"],
        "quantity": request.json["quantity"],
    }
    products.append(new_product)
    return jsonify({
        "message": "Product added"
    })

@app.route('/products/<string:product_name>', methods=["PUT"])
def editProduct(product_name):
    products_found = [product for product in products if product["name"] == product_name]
    if(len(products_found) > 0):
        products_found[0]["name"] = request.json["name"]
        products_found[0]["price"] = request.json["price"]
        products_found[0]["quantity"] = request.json["quantity"]
        return  jsonify({
            "message": "Product updated"
        })
    else:
        return jsonify({
            "message": "Product not found"
        })
    
@app.route('/products/<string:product_name>', methods=["DELETE"])
def deleteProduct(product_name):
    products_found = [product for product in products if product["name"] == product_name]
    if(len(products_found) > 0):
        products.remove(products_found[0])
        return jsonify({
            "message": "Product deleted"
        })
    else:
        return jsonify({
            "message": "Product not found"
        })

if __name__ == '__main__':
    app.run(debug=True, port=4000)