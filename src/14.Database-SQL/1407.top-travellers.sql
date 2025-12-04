-- @quanngynx
-- https://leetcode.com/problems/top-travellers/
-- PostgreSQL Solution

-- 1. Use COALESCE to handle NULL values and sum the distance
-- 2. Group by user id to get the total distance for each user
-- 3. Order by distance in descending order and name in ascending order
SELECT u.name, COALESCE(SUM(r.distance), 0) AS travelled_distance
FROM Users u
LEFT JOIN Rides r ON u.id = r.user_id
GROUP BY u.id,u.name
ORDER BY travelled_distance DESC, name ASC;

-- MySQL Solution
SELECT u.name, COALESCE(SUM(r.distance), 0) AS travelled_distance
FROM users u
LEFT JOIN rides r ON u.id = r.user_id
GROUP BY u.id,u.name
ORDER BY travelled_distance DESC, u.name ASC;