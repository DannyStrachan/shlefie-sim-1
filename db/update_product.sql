UPDATE products
SET name = $2, price = $3, img =$4
WHERE product_id = $1;