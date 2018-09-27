-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: university_database_2
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.33-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_access_tokens`
--

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
INSERT INTO `oauth_access_tokens` VALUES ('3bc33da17faf7e73e4caa6185c01cefd307b4a95460407f102fc057409329d3081b208ac2150225e',1,1,'oauth','[]',1,'2018-09-13 06:01:09','2018-09-13 06:01:09','2019-09-13 11:31:09'),('3bf7cef2f38f0e674ad279282b285ac0a3219ce3db87021c0511de1dc6db68cb80eb838f69e6e9e9',10,1,'oauth','[]',1,'2018-09-14 22:59:55','2018-09-14 22:59:55','2019-09-15 04:29:55'),('7a5553558b3c7d68619d3f0f6a240b518ae0da0d57bf319c588561ccb2de165f9640d271f6d99e59',1,1,'oauth','[]',0,'2018-09-13 21:46:26','2018-09-13 21:46:26','2019-09-14 03:16:26'),('7cd6875256a91200caf4a391ee3f76592bc0bb0b511ea4746041996ef9fbeee34748e4b84fbb8eb8',1,1,'oauth','[]',0,'2018-09-13 06:04:20','2018-09-13 06:04:20','2019-09-13 11:34:20'),('8d3d91bd1cfc87ca53d32cb21b28bc9a2d26bc3a3b22810f6e77e2afa1c8b1424650913cac266e85',1,1,'oauth','[]',1,'2018-09-14 23:02:37','2018-09-14 23:02:37','2019-09-15 04:32:37'),('abcac102a4409c20f06c359d775daebeac5decf39d5598fa2b9193701c28fd25c7926d75ab02f2a6',1,1,'oauth','[]',0,'2018-09-14 23:17:51','2018-09-14 23:17:51','2019-09-15 04:47:51'),('b0d43a1761d43f6b2e53b6d36d736f53f06ffe1a82036b2c591c2306b0c225665940f53b8a018130',10,1,'oauth','[]',1,'2018-09-14 23:06:40','2018-09-14 23:06:40','2019-09-15 04:36:40'),('bd752c67245cb51e34815d41987c10a94ba8649f812ee825b36ea77f2a072c1e5738156e59b3c1f5',1,1,'oauth','[]',1,'2018-09-14 09:26:04','2018-09-14 09:26:04','2019-09-14 14:56:04'),('cabf23d3b3c0d1c1b17656987d1b3063727b20c654f0a21e42a4de37493d0906f9d307ddc515cb86',1,1,'oauth','[]',1,'2018-09-14 23:06:13','2018-09-14 23:06:13','2019-09-15 04:36:13');
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-15 11:37:12
