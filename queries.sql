-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT ProductName, CategoryName FROM Product
JOIN Category ON CategoryId=Category.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT [Order].Id, CompanyName, OrderDate FROM [Order]
LEFT JOIN Shipper ON EmployeeId=Shipper.id
WHERE OrderDate < '2012-08-09';
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.productname,
o.quantity
FROM orderDetail as o
JOIN product as p
ON p.id = o.productid
WHERE orderId = 10251;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT [Order].id AS OrderId, 
    CompanyName AS CustomerCompanyName,
    LastName AS EmployeeLastName
    FROM [Order]
    JOIN Employee 
    ON Employee.id=EmployeeId
    JOIN Customer
    ON Customer.id=CustomerId;