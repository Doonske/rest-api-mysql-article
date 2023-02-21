-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 21. Feb 2023 um 16:43
-- Server-Version: 10.4.22-MariaDB
-- PHP-Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `testdaten`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `entries`
--

CREATE TABLE `entries` (
  `id` int(11) NOT NULL,
  `createdOn` int(11) NOT NULL,
  `createdBy` varchar(255) NOT NULL,
  `softwareVersion` varchar(20) NOT NULL,
  `customer` varchar(255) NOT NULL,
  `entry_type` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `size` int(11) NOT NULL,
  `comment` text DEFAULT NULL,
  `shorthand` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `entries`
--

INSERT INTO `entries` (`id`, `createdOn`, `createdBy`, `softwareVersion`, `customer`, `entry_type`, `address`, `size`, `comment`, `shorthand`) VALUES
(1, 1667400075, 'Max Musterman', '2022-1.3.2', 'Gut & Unbezahlbar GmbH', 'house', 'Beispielstraße 56, 89522 Heidenheim an der Brenz', 246, 'Ruhige Lage, mitten im Zentrum', 'Objekt AB-246'),
(2, 1667400075, 'Max Musterman', '2022-1.3.2', 'Gut & Unbezahlbar GmbH', 'house', 'Beispielstraße 56, 89522 Heidenheim an der Brenz', 246, 'Ruhige Lage, mitten im Zentrum', 'Objekt AB-246'),
(3, 1667400075, 'Frieda Fröhlich', '3.4.2.6', 'Studentenbuden AG', 'apartment', 'Am bekannten Platz 28, 89522 Heidenheim an der Brenz', 34, 'Kleine Wohnung für Studenten, Möbiliert, Gute lage, Preiswert', 'Studenten Wohnung am');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `entries`
--
ALTER TABLE `entries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `entries`
--
ALTER TABLE `entries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
