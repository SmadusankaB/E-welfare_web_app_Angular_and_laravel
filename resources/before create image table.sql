-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: university_database
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.30-MariaDB

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
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2016_06_01_000001_create_oauth_auth_codes_table',1),(4,'2016_06_01_000002_create_oauth_access_tokens_table',1),(5,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),(6,'2016_06_01_000004_create_oauth_clients_table',1),(7,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),(8,'2017_12_07_042726_create_users_activation_table',1),(9,'2018_02_01_162635_create_roles_table',1),(10,'2018_02_01_162851_create_role_user_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `oauth_access_tokens` VALUES ('00d39152297bc53d69e2cb7ae774a39a815f31c2ccbb9e04e3b0505b41b7ac32cde14f16c6d19dcd',2,1,'oauth','[]',1,'2018-02-13 16:37:48','2018-02-13 16:37:48','2019-02-13 22:07:48'),('0256cbc4112539be0bb5fdc5f17fcd642e52a853338981ba99464a258dd4f03584d970cc00fd6f12',2,1,'oauth','[]',0,'2018-02-12 13:15:48','2018-02-12 13:15:48','2019-02-12 18:45:48'),('03b3326e60d56b5a38899647702c1a40a5072adb509d6d7251eeb4fc14abeff04de40f3a73371372',2,1,'oauth','[]',0,'2018-02-15 21:50:33','2018-02-15 21:50:33','2019-02-16 03:20:33'),('06eff49cd60e1a7c31f6fdd039f42971286edcc1d04248c04dd3cce1f7c89183cc964ee4f122c92c',1,1,'oauth','[]',1,'2018-02-13 16:48:27','2018-02-13 16:48:27','2019-02-13 22:18:27'),('0c479a0a8ba26e1de8e91ec8bdf5f9dde8da9baaa9c67ed794cd7f9bcdbd477e6966dd03e9e7f61f',2,1,'oauth','[]',1,'2018-02-13 12:09:44','2018-02-13 12:09:44','2019-02-13 17:39:44'),('0d7956ea4ffc513fc2f5e538a8763414bd38f0005060b0a9511e393a6a8994833e1c07d91cd4abd2',1,1,'oauth','[]',1,'2018-02-12 13:08:53','2018-02-12 13:08:53','2019-02-12 18:38:53'),('168acebef4ede48b98181effac4b66907e3d71e00631cab3ba5fd3c3bf5f6101d8a55516dc61df55',1,1,'oauth','[]',1,'2018-02-13 12:23:33','2018-02-13 12:23:33','2019-02-13 17:53:33'),('1a1c46acfeb0afcba70a41889cc05e5606cd98d6553ab2ff53f24d06303a39ae2411df1e968dbcd5',2,1,'oauth','[]',0,'2018-02-12 22:55:02','2018-02-12 22:55:02','2019-02-13 04:25:02'),('1d3d5a087eb2e26ce61c41bfd88fda0e995a596bbaa848bf325077f7412eeb97a57d6ebfea29df0f',2,1,'oauth','[]',1,'2018-02-13 08:14:57','2018-02-13 08:14:57','2019-02-13 13:44:57'),('210ed149e1c7c38d5ba19c5171a94ee3de89202f574a795aeade19cbd4e5a0013df4fc7c258aa0b6',2,1,'oauth','[]',0,'2018-02-14 02:46:02','2018-02-14 02:46:02','2019-02-14 08:16:02'),('23cb8250c1ea3e3a9ed04fb52bcf0687b96e06decdb72cb04bbd3fa083d2385a37ef56372c579886',3,1,'oauth','[]',0,'2018-02-12 17:23:25','2018-02-12 17:23:25','2019-02-12 22:53:25'),('2599ba66538c5807befb978fe660d433154293b46c69942077198c397edb14fa8b08fbe666b3c9eb',2,1,'oauth','[]',1,'2018-02-12 13:13:25','2018-02-12 13:13:25','2019-02-12 18:43:25'),('25b0768357917a86aa50309a52fe6bde3903085d77371e542f6687bd8c1200f79749bc4eb0d21935',1,1,'oauth','[]',1,'2018-02-12 23:02:22','2018-02-12 23:02:22','2019-02-13 04:32:22'),('2a2d226f30b9a8d48233b0ac5d30fbf7f0918c6b812495612226d2d7cb4662ffa94d4f9032132e9c',1,1,'oauth','[]',1,'2018-02-13 11:18:51','2018-02-13 11:18:51','2019-02-13 16:48:51'),('2af694b1f0d8e402c07604ff05add92990c03a6c39d5e74e97f6527acb016572e3a8de7c635b8e79',2,1,'oauth','[]',0,'2018-02-12 23:34:54','2018-02-12 23:34:54','2019-02-13 05:04:54'),('2ee2a1492f4c5b34b44e6fa78f5621f568be3b6a567743b0032dfa71c006c0aaacc5980342fd4586',2,1,'oauth','[]',1,'2018-02-13 16:20:40','2018-02-13 16:20:40','2019-02-13 21:50:40'),('34e0f5c847643337c8870806ff49baf34f2b2d434b47128ed6f87e30208674ce952e9ed5d2193745',2,1,'oauth','[]',0,'2018-02-12 16:50:19','2018-02-12 16:50:19','2019-02-12 22:20:19'),('34faf1fd18d69a5ebb34213d0aafb033b55b33f3155baed6cc6fe45a3c0aec006fb821f4ff865bf5',1,1,'oauth','[]',1,'2018-02-12 16:50:13','2018-02-12 16:50:13','2019-02-12 22:20:13'),('378b8b8aa6e0242225b233100a53ab121d4a4dbc52de1c733268bac75a7db32e27ce7662111d57c5',1,1,'oauth','[]',1,'2018-02-13 11:53:28','2018-02-13 11:53:28','2019-02-13 17:23:28'),('386ab631a92324a865c6274b895ab664a1f05f885a7343157d797aa53074ac204f8dab3dfa138491',3,1,'oauth','[]',0,'2018-02-12 13:15:54','2018-02-12 13:15:54','2019-02-12 18:45:54'),('3a1b70ff8b61bc587b1eab5b284274d03721fc0573b3469d5c3227c6cbc6afdfcad19697ec42e2ba',2,1,'oauth','[]',1,'2018-02-15 21:51:43','2018-02-15 21:51:43','2019-02-16 03:21:43'),('3acbebf4e4c9b72a585357a3d50bbccd10142d73c5a36f2c0dee70bfd41c20ae4fce191e758cd62c',1,1,'oauth','[]',0,'2018-02-13 00:12:46','2018-02-13 00:12:46','2019-02-13 05:42:46'),('3adbc3715fa1b70feba0ffab95200ebad13fd180ca1c60fe44d98ec08e549bea3bcb3e49455b14a1',1,1,'oauth','[]',1,'2018-02-12 14:58:19','2018-02-12 14:58:19','2019-02-12 20:28:19'),('3b277b8007f827c946186e905bf851ac3e584df7fdc62b35c7cbac54812a8a36e4563e6a72732763',2,1,'oauth','[]',1,'2018-02-15 10:51:35','2018-02-15 10:51:35','2019-02-15 16:21:35'),('3c07d5274066680df872ac361234fc2f1c250ed2777e33a4fc0de2babd1f5427f2f6d61a15bcaf94',2,1,'oauth','[]',1,'2018-02-15 23:02:06','2018-02-15 23:02:06','2019-02-16 04:32:06'),('3d516f7f3359cb9409903098bdc3d4a2669eb44cfed0e4ec0dcb5b9923e94a29972cb851075b8315',2,1,'oauth','[]',0,'2018-02-12 17:22:15','2018-02-12 17:22:15','2019-02-12 22:52:15'),('45e786798d31b97fb5f1e8ca446258d943b182a7795be49d741acf2be08229691898277284aa5ae2',1,1,'oauth','[]',1,'2018-02-12 21:37:11','2018-02-12 21:37:11','2019-02-13 03:07:11'),('4740e355a5dde090119780dbd832450d0e2c0ed180b66610ff724044782d3524255bacf5a014738d',1,1,'oauth','[]',1,'2018-02-13 14:56:57','2018-02-13 14:56:57','2019-02-13 20:26:57'),('48d7b0103a451e48387d8262f482a92e59f45fd4f52fce2a103978d7daf5b850c1c7a2747f4a4c38',1,1,'oauth','[]',0,'2018-02-12 21:15:45','2018-02-12 21:15:45','2019-02-13 02:45:45'),('494bf87cb2c6da8a0bba6d275d625ac6bc77f3e20672e985a40617c5dc3644d83c32b7c7093863e4',2,1,'oauth','[]',0,'2018-02-12 23:22:51','2018-02-12 23:22:51','2019-02-13 04:52:51'),('49b4d5c179d95db234b0c5a1d778685532e0be1884235315572a2661f0fb8ec4a2767d9826d22df7',4,1,'oauth','[]',0,'2018-02-12 13:15:42','2018-02-12 13:15:42','2019-02-12 18:45:42'),('4a422dbad3d00a4b8df58cb58a581bdb6f4da7e38f6fbd4741619a553a8ea06b98b05e000f372013',4,1,'oauth','[]',1,'2018-02-12 13:14:03','2018-02-12 13:14:03','2019-02-12 18:44:03'),('4f0d3b2a5ecc326b3dca7d6d0d07b16c09ad202602b5efedb8022ab9740b16385b4d230165ef03be',2,1,'oauth','[]',0,'2018-02-16 02:39:32','2018-02-16 02:39:32','2019-02-16 08:09:32'),('5305ed27edaa2afa5a19423b976e7cb51a07cc0f1ec577747262ba16590ceeca0a4d553ec7998eff',1,1,'oauth','[]',0,'2018-02-12 21:16:15','2018-02-12 21:16:15','2019-02-13 02:46:15'),('5401bce3f55c5154e536cafe99d442f50d350c34ed4c7bde5d15dfe3eeb3f020b172af3c97f92e14',2,1,'oauth','[]',1,'2018-02-12 21:16:53','2018-02-12 21:16:53','2019-02-13 02:46:53'),('5489685ee72084b0ad47da5747a4a79fe27f50ee97617c72a44a8f2b7906b9d5927060b0e3e3db7e',2,1,'oauth','[]',1,'2018-02-12 23:55:52','2018-02-12 23:55:52','2019-02-13 05:25:52'),('559aa422c65495dd54320105f3244b4b5fd90d78ddfc445d7f9a01b11686518eb45cf6e0bd179cf4',2,1,'oauth','[]',1,'2018-02-13 00:10:26','2018-02-13 00:10:26','2019-02-13 05:40:26'),('5898d4cdbb752a6ef2fb6a9061420cd156265b14a094336a09b05428fd3e8f9a961e2dcdbaf61ef3',1,1,'oauth','[]',1,'2018-02-12 12:49:21','2018-02-12 12:49:21','2019-02-12 18:19:21'),('58f63931086085a3c89c946798017800a024f8f6e0511353791166ff8e3b35856a10307248e59330',2,1,'oauth','[]',0,'2018-02-15 02:44:40','2018-02-15 02:44:40','2019-02-15 08:14:40'),('595cd07258f6fca1de8f03549261b1e5ebc3c501f6c14fa37fff82cfbedbf86cf9316aa2dc68fba2',1,1,'oauth','[]',1,'2018-02-12 23:07:09','2018-02-12 23:07:09','2019-02-13 04:37:09'),('5d52395f990f38706b78697999b0670c39321b1873af78bb448541823e92e37346dc889c214dcf54',1,1,'oauth','[]',1,'2018-02-12 17:17:03','2018-02-12 17:17:03','2019-02-12 22:47:03'),('5f31a8d5d13aebc4237bb074ffad01b572a4e61a9eb9a46c3d710db448fc6ffe3f0f2a136e9eb289',2,1,'oauth','[]',1,'2018-02-13 12:23:05','2018-02-13 12:23:05','2019-02-13 17:53:05'),('64d065bdf3a320cb9a4c453d9f8778abb7c30112a6a970f1ff51d6d1ee39da15210a05df3a0a6ccf',1,1,'oauth','[]',1,'2018-02-12 17:21:53','2018-02-12 17:21:53','2019-02-12 22:51:53'),('6676c3684d05a2f65f439ea7c8258249f727439cb12a4994cafde5bd6e221fb9e86e19f988ba3de2',2,1,'oauth','[]',0,'2018-02-12 22:57:42','2018-02-12 22:57:42','2019-02-13 04:27:42'),('69a24b65439766d3501d185bd256fefa40e63afb0c7845954b21404929966d8fa0beb0d903ae968f',1,1,'oauth','[]',1,'2018-02-13 08:14:01','2018-02-13 08:14:01','2019-02-13 13:44:01'),('6a922e95ba2364bb0e17b8d8cbf46b3ce27edb71a17de6580ecad645b8a18e368c5b8aaf9e44d92b',2,1,'oauth','[]',0,'2018-02-12 13:11:12','2018-02-12 13:11:12','2019-02-12 18:41:12'),('6a943e3ac49d879f92d3271b95af4fc7f72505ad64c4ff973ecc0b2d064aaa327fcac18bf97d4d51',2,1,'oauth','[]',0,'2018-02-13 17:11:45','2018-02-13 17:11:45','2019-02-13 22:41:45'),('6dd265e4fe64be09d3d3594f0b8ef2953b01c862a250347ca86233f069171cf1e8c783627f1f2f69',2,1,'oauth','[]',0,'2018-02-12 23:22:20','2018-02-12 23:22:20','2019-02-13 04:52:20'),('6dda00b556f414698d2bfd81c9045211af302a7c1fee98d604f563004b1b41d1bc6f4a748e4e802f',2,1,'oauth','[]',1,'2018-02-16 08:22:59','2018-02-16 08:22:59','2019-02-16 13:52:59'),('702dc8f490b94912435189e32a98d2341c955c494491c25b1365aee2aa367429824757254e48d6d7',2,1,'oauth','[]',1,'2018-02-16 02:38:43','2018-02-16 02:38:43','2019-02-16 08:08:43'),('715e6497db302f79df86af1972229ea34f9ae63c8508833c55e2c54f298ec0d79d6a583d635aafbd',1,1,'oauth','[]',0,'2018-02-12 14:58:18','2018-02-12 14:58:18','2019-02-12 20:28:18'),('71ce0263862027d7a1f9fb9f695dfdbc02a3cadf43014d6a4cc49ee19d3da4b5bd7f70461afa87f2',2,1,'oauth','[]',1,'2018-02-12 21:18:52','2018-02-12 21:18:52','2019-02-13 02:48:52'),('72d9081162c5f39cdb9bbcb52df2fa6233712431d8650bec943492dac992bda495884f541868ada3',1,1,'oauth','[]',1,'2018-02-13 12:27:59','2018-02-13 12:27:59','2019-02-13 17:57:59'),('738f9d34f823761918e84c9d85d51d326704e54f78a37326dc36973b5ee77b1cfeb5b09051468684',1,1,'oauth','[]',1,'2018-02-14 02:08:25','2018-02-14 02:08:25','2019-02-14 07:38:25'),('742dc719c26a59346f0b746c49e34d3423215a5a422b41c08c31c72f934536f1e7b859fca83429d7',2,1,'oauth','[]',1,'2018-02-13 16:48:47','2018-02-13 16:48:47','2019-02-13 22:18:47'),('774bac5559693f0da25046cd30a2249c5153ea14152e1f9932475fb433c00b9eaeec8959d51f11d1',2,1,'oauth','[]',0,'2018-02-12 21:37:30','2018-02-12 21:37:30','2019-02-13 03:07:30'),('7d3e3363b39ebb0cf11d2eff1af866743cc018138fa53e222d2b55c2c9b9dd6aa466ce8415179553',1,1,'oauth','[]',1,'2018-02-12 17:06:02','2018-02-12 17:06:02','2019-02-12 22:36:02'),('7e191081d8a78150a098c776adf4ff5ff6569d166d09bfd0eca14b7da65d8f6909525e4474f19e61',2,1,'oauth','[]',0,'2018-02-13 15:41:02','2018-02-13 15:41:02','2019-02-13 21:11:02'),('7e8e53ee8ac614af2e327b07929a2ad2c4bdb1c6c5f5d6c05fee81317f8ef50adda5511153e3418e',1,1,'oauth','[]',1,'2018-02-12 16:50:03','2018-02-12 16:50:03','2019-02-12 22:20:03'),('80504bb9889ae1fc9b163a3422248bec945780ed379a1b742313c2549b13065113145286e4026767',4,1,'oauth','[]',1,'2018-02-12 12:57:36','2018-02-12 12:57:36','2019-02-12 18:27:36'),('83197501bdbae4f9ac2c4a0b8455ab9a207c6900c54426949a254ccfda063ad279e024a71e186135',4,1,'oauth','[]',0,'2018-02-12 17:23:56','2018-02-12 17:23:56','2019-02-12 22:53:56'),('84b7e2948d80df1d920f759ca2c9043c31b0fe51e44e9e59dfc9641ae64ff7bac2f7020867439f2b',1,1,'oauth','[]',1,'2018-02-13 12:28:28','2018-02-13 12:28:28','2019-02-13 17:58:28'),('862a51d16234f02fc421fb180118d2424502b9c60da7c9088d2e6d97b9a2b1a45a1d28e841bf7675',4,1,'oauth','[]',0,'2018-02-12 17:23:52','2018-02-12 17:23:52','2019-02-12 22:53:52'),('86e86ce80fb5079d9995b12e9fb97558d634472e3049d20c7aa52a15645f4941d471895cbd4baf67',1,1,'oauth','[]',1,'2018-02-12 13:16:00','2018-02-12 13:16:00','2019-02-12 18:46:00'),('8728867d31e37866445892c0c24d59adb033f9f1d9e4a6b4cf76321d935b004f98020711aa343164',2,1,'oauth','[]',1,'2018-02-13 13:54:46','2018-02-13 13:54:46','2019-02-13 19:24:46'),('876d5e6ccab6abdff895adc6d0b6aa44e07050941fc55f2a1600b58d3d41989a514a1554e2f11e6e',1,1,'oauth','[]',1,'2018-02-12 16:23:43','2018-02-12 16:23:43','2019-02-12 21:53:43'),('8960631e27a0ea4e2318daa2c72dea339a24fa7f34dc24126d0b78c55f0dd47e5a03c027b88a8188',1,1,'oauth','[]',1,'2018-02-13 16:48:37','2018-02-13 16:48:37','2019-02-13 22:18:37'),('8d6829d94e07d9abd21a38f031181c58369c4ec91d9b86f3c99234544c3a6ffb17a1dcd0ca6cc020',1,1,'oauth','[]',0,'2018-02-13 13:43:35','2018-02-13 13:43:35','2019-02-13 19:13:35'),('9286a8ff72df6a515a6f8911d5dcaa2196fad32e3ce02c83399b6e3727738544b6cd65b16bc5986a',2,1,'oauth','[]',0,'2018-02-12 22:57:31','2018-02-12 22:57:31','2019-02-13 04:27:31'),('92ecc531e7080ec34c68bafb625692dbc8e8682ccd6ac32e831e70c02b6c602a81a3d20a3469e32b',1,1,'oauth','[]',1,'2018-02-13 00:07:18','2018-02-13 00:07:18','2019-02-13 05:37:18'),('9616d44750aaa414009adeacc3b141746e0c633982fe5b6ab97876d75f826e30f5a16df9596ea51b',3,1,'oauth','[]',1,'2018-02-12 17:23:38','2018-02-12 17:23:38','2019-02-12 22:53:38'),('982e0aaf4d2b8c1f4d62f24be6dda5555dcbde24793ab392e7fca1cae37cf74666b521b4a441d4b3',2,1,'oauth','[]',1,'2018-02-13 09:18:47','2018-02-13 09:18:47','2019-02-13 14:48:47'),('98bb4356f842863c6cc422f3b63ab5778941b881d881a6cec1443fc7295c0fa9c55e0262a29b1c76',1,1,'oauth','[]',1,'2018-02-13 16:37:41','2018-02-13 16:37:41','2019-02-13 22:07:41'),('9afac9595c459d744e5562a069e8223ee265fead8e3ba9ad40e62dc103a231b5faa4b2e83fd5c169',2,1,'oauth','[]',0,'2018-02-16 09:48:14','2018-02-16 09:48:14','2019-02-16 15:18:14'),('9b1b2c97abf225739a48f9635010043a377c6aceab24bfed38998d6a1b7c7419088cd42b41c5af87',2,1,'oauth','[]',0,'2018-02-15 23:02:23','2018-02-15 23:02:23','2019-02-16 04:32:23'),('9b8cb76457dbdca178bc61fdf86adc94b34cc71d73819531b280b1b1f4ecb4ce127dc32b9d89e57a',2,1,'oauth','[]',1,'2018-02-13 00:01:15','2018-02-13 00:01:15','2019-02-13 05:31:15'),('9c14b8ccecbe4dd58245b5b7c3470cb7dfb1a7db281a9e481648c62ea2672d9ae8c9fb1d86ff754c',1,1,'oauth','[]',0,'2018-02-13 13:45:37','2018-02-13 13:45:37','2019-02-13 19:15:37'),('9e487237282a76ef8f6994749620e47520335db89743325c74ace1dd06fa47a684ea93ec614cd4ef',1,1,'oauth','[]',1,'2018-02-12 13:08:25','2018-02-12 13:08:25','2019-02-12 18:38:25'),('9ef33d49042542d36ba8966b4eb345c7d390b1819a97d344515a2cac83b374d8642d2964c6a7b376',2,1,'oauth','[]',0,'2018-02-15 21:50:34','2018-02-15 21:50:34','2019-02-16 03:20:34'),('9f82891049c77a180a721f29fbd338db46a52d3c9bc32966cb6c8ea2ab5286139873755b5c434a2b',2,1,'oauth','[]',1,'2018-02-12 12:55:46','2018-02-12 12:55:46','2019-02-12 18:25:46'),('9fad8f1024e331272490bbabc23d6944501a02848cb2b75d7165fe74405158da54522bc5850bb3f2',1,1,'oauth','[]',1,'2018-02-13 15:40:36','2018-02-13 15:40:36','2019-02-13 21:10:36'),('a0acc9e42e8f7448565ea73ad3664a84033db5abbc0280cb36fb897b76e2cd7a5dfd3fd085a3d06a',2,1,'oauth','[]',1,'2018-02-13 11:23:11','2018-02-13 11:23:11','2019-02-13 16:53:11'),('a277329cd1fac0c9b91cb38d0718dbea0dd982c4d1dd6230a773390c19d97b266f2689ad98113147',3,1,'oauth','[]',1,'2018-02-12 12:56:40','2018-02-12 12:56:40','2019-02-12 18:26:40'),('aaac7386639b84bfc25f30290b2acfe8192de65babf8dec35b56f3826847350f7e826c1fc05a8f0b',1,1,'oauth','[]',1,'2018-02-13 17:11:39','2018-02-13 17:11:39','2019-02-13 22:41:39'),('ae2d6a95f0c96ed39060f93b04678ea2303d51e381d06ced6efbcbe5b36c473b017a4101449ff31a',4,1,'oauth','[]',0,'2018-02-12 13:15:21','2018-02-12 13:15:21','2019-02-12 18:45:21'),('af6873466b73e44592a77e56d8ac1d7575aba94eb7be8d58afedd79eaab34bfc7c1ee8bc73e312fc',2,1,'oauth','[]',0,'2018-02-13 13:36:09','2018-02-13 13:36:09','2019-02-13 19:06:09'),('b697992730aacee6a1e1fa5933230b8d187f79c58c9865d5f63fbdf949bbbf469148d617b0c35619',2,1,'oauth','[]',1,'2018-02-12 16:48:24','2018-02-12 16:48:24','2019-02-12 22:18:24'),('ba9da008012e60b8d2ddd260c1c486f9e6bfee560058e98cf5aa5243eda0c3cf39b784ecb5c1bf7a',2,1,'oauth','[]',0,'2018-02-12 17:07:22','2018-02-12 17:07:22','2019-02-12 22:37:22'),('bb710e3a89caa593fceea2ef356e278bd46638c5a70cb5e4d2e289c4e654b9b6922d5983610fd36f',2,1,'oauth','[]',0,'2018-02-16 02:32:19','2018-02-16 02:32:19','2019-02-16 08:02:19'),('c335aaa7a1643a50cc294e0c73a4974de3d6027d4a945819af0573fcbc5d1d5415548db796e4d932',2,1,'oauth','[]',0,'2018-02-12 23:40:43','2018-02-12 23:40:43','2019-02-13 05:10:43'),('c3ba44c957a119aa7d19d080b66f4887faef487f1bd11b5e4b5021dbfbabd3c1b815d5f2ce240d20',1,1,'oauth','[]',1,'2018-02-13 09:00:49','2018-02-13 09:00:49','2019-02-13 14:30:49'),('c671af44b3d20b38982a7ad7a0cf527da3a7cf3c271fcc50b9d6612fcf8079b324fae4f5dc91eba6',2,1,'oauth','[]',1,'2018-02-13 22:03:21','2018-02-13 22:03:21','2019-02-14 03:33:21'),('c6ce640b7b09b1901fbd588dea93e837f56635d43b6d97db63d916ff5cda738d508ce5821d4ebd0d',1,1,'oauth','[]',1,'2018-02-13 12:22:53','2018-02-13 12:22:53','2019-02-13 17:52:53'),('c6f28809e4f0ca4f516e878464857494510cd83acfee212dd5a744afbe6be26b16af00c277239ea7',2,1,'oauth','[]',1,'2018-02-13 09:00:36','2018-02-13 09:00:36','2019-02-13 14:30:36'),('c74afaf65b0f1593ad37bbfeaeb6e4ce0cd559d8e394072b76d800ceae048449ae40455e0c2bf91d',3,1,'oauth','[]',0,'2018-02-12 17:22:21','2018-02-12 17:22:21','2019-02-12 22:52:21'),('c7581f0e3fda445d8d7ad2751937342e7c9b6ea9c4bc5a9c96e25c4341ecf282451ec87d26000d84',1,1,'oauth','[]',0,'2018-02-12 23:35:06','2018-02-12 23:35:06','2019-02-13 05:05:06'),('c7c74358c542d1e114148898d39bf5a84d56150d5f6b85fbbf9860115130037a543cb0a7fc23ecb8',2,1,'oauth','[]',0,'2018-02-13 00:07:26','2018-02-13 00:07:26','2019-02-13 05:37:26'),('d23f66ce69d67c6898f960163f394c9cb40d20bcb7b66ddeac771439e9521d01991a401f14b82085',2,1,'oauth','[]',0,'2018-02-12 23:02:47','2018-02-12 23:02:47','2019-02-13 04:32:47'),('d23fb3d98e882a00fa205054dd40790f6150ea23bb3a9956b6be13457807a1de6f41f4cb757dd545',2,1,'oauth','[]',1,'2018-02-14 02:08:11','2018-02-14 02:08:11','2019-02-14 07:38:11'),('d54ca1cd7ae26f11c6e5a66b4181758657a85fc26794b82ceb745f37be46acb8086dde9373e58ad9',1,1,'oauth','[]',0,'2018-02-12 16:50:02','2018-02-12 16:50:02','2019-02-12 22:20:02'),('d6187eb763f37061aee708d261665ca20dfbfdc2a7eb8e0c8140982b3ee1f3cf81d74a2515510b26',2,1,'oauth','[]',0,'2018-02-13 14:57:12','2018-02-13 14:57:12','2019-02-13 20:27:12'),('d6ae8890a1b75fdc7e10ed7056dc11e6258f3440f1bc1246aa996045fdf6cadca808198401609ca5',1,1,'oauth','[]',0,'2018-02-12 17:22:28','2018-02-12 17:22:28','2019-02-12 22:52:28'),('d9ea738d11ddb83001dde487a4c737bdcc15cacd3a7dca5034d77549f6a99ef9b5887d8008472b15',1,1,'oauth','[]',0,'2018-02-12 17:23:08','2018-02-12 17:23:08','2019-02-12 22:53:08'),('da0e7daba17fd2e29a54a148f647bc1d9744f0e38e2f8e74a587cc087781941449647ff53896db68',2,1,'oauth','[]',0,'2018-02-12 17:16:47','2018-02-12 17:16:47','2019-02-12 22:46:47'),('e0b736b7cd09a3f1af23e1cce6e5aac4f33016801e0698bb8c250928e721ad2a274c0d245da9894f',3,1,'oauth','[]',1,'2018-02-12 17:23:26','2018-02-12 17:23:26','2019-02-12 22:53:26'),('e2f175ec366c1376678a5f473c055ca04415466ca94c27d419c7bdb6c6019096e31cbfb49e09e520',1,1,'oauth','[]',1,'2018-02-12 17:16:37','2018-02-12 17:16:37','2019-02-12 22:46:37'),('e958f6df97a1f53cbd19ab1a6e96bab46c6a73476a02f780c97d2f729b0fedbc23e566eae92dc98f',4,1,'oauth','[]',1,'2018-02-12 13:18:38','2018-02-12 13:18:38','2019-02-12 18:48:38'),('ea63f6ed3278ff6bef1d00667462ee1446002fa32421ee7ee9aaad1f867c292d638b800736b094f0',1,1,'oauth','[]',1,'2018-02-12 21:37:23','2018-02-12 21:37:23','2019-02-13 03:07:23'),('f4719a0a29d7d5368228de6164d08b6e6122fdb3e0488eab88fd7d99592d50b98c101c74c985d384',1,1,'oauth','[]',1,'2018-02-12 23:02:38','2018-02-12 23:02:38','2019-02-13 04:32:38'),('f652635ab5a7a41094e60e8edc915e466f83d955de92b4dd512b63c8c707efb8d6e4a5e8322ccae5',2,1,'oauth','[]',0,'2018-02-13 00:09:08','2018-02-13 00:09:08','2019-02-13 05:39:08'),('f69892bfbd2e6233d5403bdc12305bd345868a696cdefb6b0b42500f7bf3668ca1cb08ac2a6b8a7a',2,1,'oauth','[]',0,'2018-02-13 15:23:04','2018-02-13 15:23:04','2019-02-13 20:53:04'),('fb0e4e361287de602db8db5fb6f3888af027692c52e4fd37a59d78096facb7183174a6934234eda6',2,1,'oauth','[]',1,'2018-02-12 17:23:14','2018-02-12 17:23:14','2019-02-12 22:53:14'),('fbcac8edc753e044f05f17b796571898dd4fbf2cdb6fff47ecb0c7f9d5cf52d3e9d645dcaa9d8471',2,1,'oauth','[]',0,'2018-02-12 17:05:55','2018-02-12 17:05:55','2019-02-12 22:35:55'),('fcc400bae2c8d3327a480899c3d652ed02749149bf3474c4121772126a012c8aabf372880eaa40a5',2,1,'oauth','[]',1,'2018-02-13 16:44:44','2018-02-13 16:44:44','2019-02-13 22:14:44'),('fd025142ce5430eaa2f5bffca565c133f0302d97ebad66b7ea39673ca2101833ec8592bd478ed176',2,1,'oauth','[]',0,'2018-02-13 15:02:35','2018-02-13 15:02:35','2019-02-13 20:32:35'),('fe9dd06d884e8028a6aeb1b8adc6e674033903d678b8abe6b518a5af0a97c44e0e6774aac33941e2',3,1,'oauth','[]',0,'2018-02-12 13:15:35','2018-02-12 13:15:35','2019-02-12 18:45:35'),('ffd168b77693d9fe48433309fef28dd1ecdb919401ab56999898bcc876366399b7a5322ad04259c0',2,1,'oauth','[]',0,'2018-02-12 17:22:08','2018-02-12 17:22:08','2019-02-12 22:52:08');
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_auth_codes`
--

LOCK TABLES `oauth_auth_codes` WRITE;
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_clients`
--

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` VALUES (1,NULL,'Laravel Personal Access Client','TO09lw1lbVzycPXTWhvBicFJuB6E5COo6PPX0fVG','http://localhost',1,0,0,'2018-02-11 01:37:39','2018-02-11 01:37:39'),(2,NULL,'Laravel Password Grant Client','4Pj0u6U96BtgGSq5FrJPMAKZ0zxrWYEpbUKBlheQ','http://localhost',0,1,0,'2018-02-11 01:37:39','2018-02-11 01:37:39');
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_personal_access_clients`
--

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` VALUES (1,1,'2018-02-11 01:37:39','2018-02-11 01:37:39');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_refresh_tokens`
--

LOCK TABLES `oauth_refresh_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_user`
--

DROP TABLE IF EXISTS `role_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_user`
--

LOCK TABLES `role_user` WRITE;
/*!40000 ALTER TABLE `role_user` DISABLE KEYS */;
INSERT INTO `role_user` VALUES (1,1,1,NULL,NULL),(2,2,2,NULL,NULL),(3,2,3,NULL,NULL);
/*!40000 ALTER TABLE `role_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ROLE_SUPERADMIN','The user who has super admin permissions',NULL,NULL),(2,'ROLE_ADMIN','The user who has Admin permissions',NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `student_no` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_activated` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_student_no_unique` (`student_no`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,NULL,'se/2013/005','semadusanka@gmail.com','$2y$10$Cyr4GZJpIFKBFrHpjcpyE.n7tWXSC2kV7CZksVlbkbj1cvnEn/5Vy',NULL,'2018-02-12 12:44:50','2018-02-12 12:49:18',1),(2,NULL,NULL,'se/2013/006','uokshashi@gmail.com','$2y$10$DAbpSHs8udWBliBdkJNIy.7ykCcjQ0vM84mClmYDxtKAudUZgpraO',NULL,'2018-02-12 12:55:19','2018-02-12 12:55:44',1),(3,NULL,NULL,'se/2013/007','setechuok@gmail.com','$2y$10$oyMQESK2GzmbMlUVt09MM.Q9oSuKnwFMhEwCI7GUQJQnwvXMxP4fG',NULL,'2018-02-12 12:56:21','2018-02-12 12:56:40',1),(4,NULL,NULL,'se/2013/008','semeeshahansi@gmail.com','$2y$10$NNOe3nCcHAI/VVg5JTBc3u5fofjCDEQduH5HyOzUX0UqW5XWWDXqK',NULL,'2018-02-12 12:57:15','2018-02-12 12:57:36',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_activation`
--

DROP TABLE IF EXISTS `users_activation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_activation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_user` int(10) unsigned NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `users_activation_id_user_foreign` (`id_user`),
  CONSTRAINT `users_activation_id_user_foreign` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_activation`
--

LOCK TABLES `users_activation` WRITE;
/*!40000 ALTER TABLE `users_activation` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_activation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-16 21:30:44
