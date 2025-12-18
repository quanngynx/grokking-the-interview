-- @quanngynx
-- https://leetcode.com/problems/patients-with-a-condition/
-- PostgreSQL Solution

-- 1. Use the WHERE clause to filter the patients with the condition

-- Version 1
SELECT * 
FROM Patients p
WHERE conditions
LIKE '% DIAB1%'
OR conditions
LIKE 'DIAB1%'
