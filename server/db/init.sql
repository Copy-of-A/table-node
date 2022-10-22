CREATE TABLE my_table (
    id SERIAL PRIMARY KEY,
    title character varying(255) NOT NULL,
    amount integer NOT NULL,
    distance numeric(9,2) NOT NULL,
);

INSERT INTO my_table (id, title, amount, distance) VALUES 
(1, 'Bjarne Stroustrup', 5, 49), 
(2, 'Martin Fowler', 10, 11.11), 
(3, 'John', 1, 10.56), 
(4, 'Chris Heilmann', 49, 14.56), 
(5, 'John', 18, 85), 
(6, 'Kent Beck', 50, 98.44), 
(7, 'Robert C. Martin', 3, 37.17), 
(8, 'Martin Fowler', 3, 64.11), 
(9, 'Donald', 5, 55), 
(10, 'Philip Greenspun', 5, 14.16), 
(11, 'John Sickel', 20, 11.11), 
(12, 'Philip', 5, 11.11), 
(13, 'Edsger W. Dijkstra', 11, 55), 
(14, 'Phil Karlton', 15, 49), 
(15, 'Bill Gates', 10, 55), 
(16, 'Brian Kernighan', 5, 49),
(17, 'Dennis Ritchie', 5, 11.11);
