CREATE DATABASE `crud_vuejs`;


CREATE TABLE `registros` (
    `id` int(11) NOT NULL,
    `nombre` varchar(60) NOT NULL,
    `telefono` varchar(20) NOT NULL
);

ALTER TABLE `registros`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `registros`
   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;