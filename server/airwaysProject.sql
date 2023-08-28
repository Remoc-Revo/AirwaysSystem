-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: airways
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `TICKET`
--

DROP TABLE IF EXISTS `TICKET`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TICKET` (
  `ticket_id` int NOT NULL AUTO_INCREMENT,
  `client_id` int DEFAULT NULL,
  `client_name` varchar(30) DEFAULT NULL,
  `client_phone` varchar(15) DEFAULT NULL,
  `seat_no` int DEFAULT NULL,
  `departure_date` date NOT NULL,
  `departure_time` time NOT NULL,
  `departure_airport` varchar(80) NOT NULL,
  `arrival_datetime` datetime DEFAULT NULL,
  `arrival_airport` varchar(80) NOT NULL,
  `price` int DEFAULT NULL,
  `class` char(1) DEFAULT NULL,
  PRIMARY KEY (`ticket_id`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TICKET`
--

LOCK TABLES `TICKET` WRITE;
/*!40000 ALTER TABLE `TICKET` DISABLE KEYS */;
INSERT INTO `TICKET` VALUES (1,0,NULL,'',NULL,'2023-07-08','00:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(2,0,NULL,'',NULL,'2023-07-08','00:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(3,0,NULL,'',NULL,'2023-07-08','00:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(4,0,NULL,'',NULL,'2023-07-08','00:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(5,1,NULL,'',NULL,'2023-07-08','00:00:00','Eldoret International Airport',NULL,'Kisumu International Airport',NULL,'B'),(6,1,NULL,'',NULL,'2023-07-08','00:00:00','Eldoret International Airport',NULL,'Kisumu International Airport',NULL,'B'),(7,1,NULL,'',NULL,'2023-07-08','00:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(8,1,NULL,'',NULL,'2023-07-08','00:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(9,1,NULL,'',NULL,'2023-07-08','00:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(10,1,NULL,'',NULL,'2023-07-08','00:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(11,1,NULL,'',NULL,'2023-07-08','00:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(12,1,NULL,'',NULL,'2023-07-08','00:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(13,1,NULL,'',NULL,'2023-06-08','00:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(14,1,NULL,'',NULL,'2023-06-08','00:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(15,1,NULL,'',NULL,'2023-06-08','00:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(16,1,NULL,'',NULL,'2023-06-08','00:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(17,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(18,1,NULL,'',NULL,'2023-07-09','12:30:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(19,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(20,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(21,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(22,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(23,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(24,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(25,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(26,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(27,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(28,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(29,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(30,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(31,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(32,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(33,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(34,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(35,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(36,1,NULL,'',NULL,'2023-07-09','12:30:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(37,1,NULL,'',NULL,'2023-07-10','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(38,1,NULL,'',NULL,'2023-07-11','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(39,1,NULL,'',NULL,'2023-07-11','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(40,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(41,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(42,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(43,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(44,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(45,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(46,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(47,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(48,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(49,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(50,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(51,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(52,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(53,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(54,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(55,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(56,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(57,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(58,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(59,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(60,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(61,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(62,1,NULL,'',NULL,'2023-07-09','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(63,1,NULL,'',NULL,'2023-07-17','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(64,1,NULL,'',NULL,'2023-07-17','12:30:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(65,1,NULL,'',NULL,'2023-07-17','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(66,1,NULL,'',NULL,'2023-07-12','12:30:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(67,1,NULL,'',NULL,'2023-07-18','15:45:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(68,1,NULL,'',NULL,'2023-07-12','12:30:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(69,1,NULL,'',NULL,'2023-07-17','12:30:00','Kisumu International Airport',NULL,'Jomo Kenyatta International Airport',NULL,'A'),(70,1,NULL,'',NULL,'2023-07-17','12:30:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(71,1,NULL,'',NULL,'2023-07-17','15:45:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(72,1,NULL,'',NULL,'2023-07-17','12:30:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(75,1,NULL,'',NULL,'2023-07-24','12:30:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(76,NULL,'Jn','+254769658733',NULL,'2023-07-26','12:30:00','Jomo Kenyatta International Airport',NULL,'Malindi International Airport',NULL,'C'),(77,NULL,'Jn','+254769658733',NULL,'2023-07-27','09:00:00','Eldoret International Airport',NULL,'Jomo Kenyatta International Airport',NULL,'A'),(78,2,NULL,'',NULL,'2023-07-28','15:45:00','Eldoret International Airport',NULL,'Moi International Airport',NULL,'B'),(79,2,NULL,'',NULL,'2023-07-25','15:45:00','Kisumu International Airport',NULL,'Jomo Kenyatta International Airport',NULL,'B'),(80,2,NULL,'',NULL,'2023-07-26','15:45:00','Kisumu International Airport',NULL,'Malindi International Airport',NULL,'A'),(82,NULL,'Timothy Wycliffe Ng\'uono','+254769658733',NULL,'2023-07-28','12:30:00','Kisumu International Airport',NULL,'Moi International Airport',NULL,'B'),(83,NULL,'smartFarmApp','+23452224534353',NULL,'2023-07-21','09:00:00','Eldoret International Airport',NULL,'Moi International Airport',NULL,'C'),(84,NULL,'Willis Raft','+23452224534353',NULL,'2023-07-21','09:00:00','Eldoret International Airport',NULL,'Moi International Airport',NULL,'C'),(85,NULL,'Stanley','0746220179',NULL,'2023-02-15','09:00:00','Eldoret International Airport',NULL,'Jomo Kenyatta International Airport',NULL,'A'),(87,NULL,'Stan','+254746220179',NULL,'2023-08-25','12:30:00','Kisumu International Airport',NULL,'Malindi International Airport',NULL,'A'),(88,NULL,'Doirg','+254769658733',NULL,'2023-08-09','12:30:00','Kisumu International Airport',NULL,'Eldoret International Airport',NULL,'B'),(89,NULL,'Iohy','+254769658733',NULL,'2023-08-08','12:30:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(90,NULL,'Gus','+254769658733',NULL,'2023-08-08','12:30:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(91,NULL,'Opder','+254769658733',NULL,'2023-08-08','12:30:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'C'),(92,NULL,'Tothy Rhui','+23452224534353',NULL,'2023-08-08','12:30:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'C'),(93,1,NULL,NULL,NULL,'2023-08-18','12:30:00','Kisumu International Airport',NULL,'Jomo Kenyatta International Airport',NULL,'C'),(94,1,NULL,NULL,NULL,'2023-08-09','15:45:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(95,NULL,'John','+254769658733',NULL,'2023-08-12','12:30:00','Jomo Kenyatta International Airport',NULL,'Eldoret International Airport',NULL,'A'),(96,NULL,'Long','+254769658733',NULL,'2023-08-30','12:30:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(97,NULL,'Righht','+254769658733',NULL,'2023-08-30','09:00:00','Malindi International Airport',NULL,'Moi International Airport',NULL,'C'),(99,4,NULL,NULL,NULL,'2023-08-25','15:45:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'C'),(100,4,NULL,NULL,NULL,'2023-08-31','09:00:00','Kisumu International Airport',NULL,'Malindi International Airport',NULL,'A'),(101,4,NULL,NULL,NULL,'2023-08-31','12:30:00','Kisumu International Airport',NULL,'Moi International Airport',NULL,'C'),(102,4,NULL,NULL,NULL,'2023-08-25','09:00:00','Eldoret International Airport',NULL,'Malindi International Airport',NULL,'C'),(103,4,NULL,NULL,NULL,'2023-08-25','09:00:00','Eldoret International Airport',NULL,'Malindi International Airport',NULL,'C'),(104,4,NULL,NULL,NULL,'2023-08-25','09:00:00','Eldoret International Airport',NULL,'Malindi International Airport',NULL,'C'),(105,4,NULL,NULL,NULL,'2023-08-25','09:00:00','Eldoret International Airport',NULL,'Malindi International Airport',NULL,'C'),(106,4,NULL,NULL,NULL,'2023-08-25','09:00:00','Eldoret International Airport',NULL,'Malindi International Airport',NULL,'C'),(107,4,NULL,NULL,NULL,'2023-08-25','09:00:00','Eldoret International Airport',NULL,'Malindi International Airport',NULL,'C'),(110,1,NULL,NULL,NULL,'2023-08-24','12:30:00','Malindi International Airport',NULL,'Kisumu International Airport',NULL,'B'),(114,1,NULL,NULL,NULL,'2023-08-25','12:30:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(115,1,NULL,NULL,NULL,'2023-08-25','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(116,1,NULL,NULL,NULL,'2023-08-25','09:00:00','Kisumu International Airport',NULL,'Jomo Kenyatta International Airport',NULL,'B'),(117,1,NULL,NULL,NULL,'2023-08-25','09:00:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'B'),(118,1,NULL,NULL,NULL,'2023-08-26','15:45:00','Kisumu International Airport',NULL,'Jomo Kenyatta International Airport',NULL,'A'),(119,1,NULL,NULL,NULL,'2023-08-18','15:45:00','Jomo Kenyatta International Airport',NULL,'Kisumu International Airport',NULL,'A'),(120,1,NULL,NULL,NULL,'2023-08-31','12:30:00','Moi International Airport',NULL,'Jomo Kenyatta International Airport',NULL,'C'),(121,1,NULL,NULL,NULL,'2023-08-26','09:00:00','Kisumu International Airport',NULL,'Malindi International Airport',NULL,'C');
/*!40000 ALTER TABLE `TICKET` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USER`
--

DROP TABLE IF EXISTS `USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USER` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_level` tinyint(1) NOT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) NOT NULL,
  `phone` varchar(14) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USER`
--

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;
INSERT INTO `USER` VALUES (1,0,'Timothy','Ng\'uono','+254769658733','su@su.com','susu'),(2,1,'Jn','Ror','+254769658733','jn@jn.com','jnjn'),(3,0,'Stanley','Pius','0746220179','stanlypiuzomondi@gmail.com','qwerty123'),(4,0,'Doirt','Kip','+234522245','es@es.com','eses');
/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-28 10:20:09
