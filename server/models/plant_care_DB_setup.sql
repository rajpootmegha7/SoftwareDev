-- Author: Pranjal Jain

-- Role: plant_care
-- DROP ROLE IF EXISTS plant_care;

CREATE ROLE plant_care WITH
  LOGIN
  SUPERUSER
  INHERIT
  CREATEDB
  CREATEROLE
  NOREPLICATION
  ENCRYPTED PASSWORD 'SCRAM-SHA-256$4096:dKiig9AzJoV3Y+Kj7jLakQ==$hW+VGxH3QzK3FR3gwzPdPZTusu7uEmDAQd04uOY8bic=:lkCotXiDPUbWdEEIY6pilU0fl8ROs/LXLF4oxleta7w=';

------------------------------------------

-- Database: plant_care
--DROP DATABASE IF EXISTS plant_care;

CREATE DATABASE plant_care
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

------------------------------------------

-- SCHEMA: plant_care

-- DROP SCHEMA IF EXISTS plant_care ;

CREATE SCHEMA IF NOT EXISTS plant_care
    AUTHORIZATION postgres;

------------------------------------------

-- SEQUENCE: plant_care.user_user_id_seq

-- DROP SEQUENCE IF EXISTS plant_care.user_user_id_seq;

CREATE SEQUENCE IF NOT EXISTS plant_care.user_user_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1
    OWNED BY "user".user_id;

ALTER SEQUENCE plant_care.user_user_id_seq
    OWNER TO postgres;

------------------------------------------

-- Table: plant_care.user

-- DROP TABLE IF EXISTS plant_care."user";

CREATE TABLE IF NOT EXISTS plant_care."user"
(
    user_id bigint NOT NULL DEFAULT nextval('plant_care.user_user_id_seq'::regclass),
    first_name character varying(100) COLLATE pg_catalog."default",
    contact_number character varying(10) COLLATE pg_catalog."default",
    password character varying(200) COLLATE pg_catalog."default",
    security_question character varying(200) COLLATE pg_catalog."default",
    security_answer character varying(200) COLLATE pg_catalog."default",
    last_name character varying(100) COLLATE pg_catalog."default",
    email character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT user_pkey PRIMARY KEY (user_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS plant_care."user"
    OWNER to postgres;

------------------------------------------

-- Table: plant_care.planner

-- DROP TABLE IF EXISTS plant_care.planner;

CREATE TABLE IF NOT EXISTS plant_care.planner
(
    user_id bigint NOT NULL,
    planner_json character varying(10000) COLLATE pg_catalog."default",
    CONSTRAINT planner_pkey PRIMARY KEY (user_id),
    CONSTRAINT "user" FOREIGN KEY (user_id)
        REFERENCES plant_care."user" (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS plant_care.planner
    OWNER to postgres;

------------------------------------------


-- Table: plant_care.calendar

-- DROP TABLE IF EXISTS plant_care.calendar;

CREATE TABLE IF NOT EXISTS plant_care.calendar
(
    user_id bigint NOT NULL,
    calendar_json character varying(2000) COLLATE pg_catalog."default",
    CONSTRAINT calendar_pkey PRIMARY KEY (user_id),
    CONSTRAINT "user" FOREIGN KEY (user_id)
        REFERENCES plant_care."user" (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS plant_care.calendar
    OWNER to postgres;

------------------------------------------

-- Table: plant_care.plant_type

-- DROP TABLE IF EXISTS plant_care.plant_type;

CREATE TABLE IF NOT EXISTS plant_care.plant_type
(
    plant_type_id integer NOT NULL,
    plant_type character varying(10) COLLATE pg_catalog."default",
    CONSTRAINT plant_type_pkey PRIMARY KEY (plant_type_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS plant_care.plant_type
    OWNER to postgres;

------------------------------------------

-- SEQUENCE: plant_care.season_type_id_season_type_id_seq

-- DROP SEQUENCE IF EXISTS plant_care.season_type_id_season_type_id_seq;

CREATE SEQUENCE IF NOT EXISTS plant_care.season_type_id_season_type_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1
    OWNED BY season_type.season_type_id;

ALTER SEQUENCE plant_care.season_type_id_season_type_id_seq
    OWNER TO postgres;

------------------------------------------

-- Table: plant_care.season_type

-- DROP TABLE IF EXISTS plant_care.season_type;

CREATE TABLE IF NOT EXISTS plant_care.season_type
(
    season_type_id bigint NOT NULL DEFAULT nextval('plant_care.season_type_id_season_type_id_seq'::regclass),
    season_type character varying(10) COLLATE pg_catalog."default",
    CONSTRAINT season_type_id_pkey PRIMARY KEY (season_type_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS plant_care.season_type
    OWNER to postgres;

------------------------------------------

-- SEQUENCE: plant_care.plant_plant_id_seq

-- DROP SEQUENCE IF EXISTS plant_care.plant_plant_id_seq;

CREATE SEQUENCE IF NOT EXISTS plant_care.plant_plant_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1
    OWNED BY plant.plant_id;

ALTER SEQUENCE plant_care.plant_plant_id_seq
    OWNER TO postgres;

------------------------------------------

-- Table: plant_care.plant

-- DROP TABLE IF EXISTS plant_care.plant;

CREATE TABLE IF NOT EXISTS plant_care.plant
(
    plant_id bigint NOT NULL DEFAULT nextval('plant_care.plant_plant_id_seq'::regclass),
    description character varying(10000) COLLATE pg_catalog."default",
    plant_type_id bigint,
    season_type_id integer,
    image VARCHAR(100000),
    water_schedule integer,
    name character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT plant_pkey PRIMARY KEY (plant_id),
    CONSTRAINT plant_type_id FOREIGN KEY (plant_type_id)
        REFERENCES plant_care.plant_type (plant_type_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT season_type_id FOREIGN KEY (season_type_id)
        REFERENCES plant_care.season_type (season_type_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS plant_care.plant
    OWNER to postgres;

------------------------------------------

-- Table: plant_care.location

-- DROP TABLE IF EXISTS plant_care.location;

CREATE TABLE IF NOT EXISTS plant_care.location
(
    plant_id bigint,
    state_name character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT plant FOREIGN KEY (plant_id)
        REFERENCES plant_care.plant (plant_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS plant_care.location
    OWNER to postgres;

------------------------------------------

INSERT INTO plant_care.plant_type VALUES (1, 'Herb');
INSERT INTO plant_care.plant_type VALUES (2, 'Shrub');
INSERT INTO plant_care.plant_type VALUES (3, 'Tree');

INSERT INTO plant_care.season_type VALUES (1, 'Spring');
INSERT INTO plant_care.season_type VALUES (2, 'Summer');
INSERT INTO plant_care.season_type VALUES (3, 'Fall');
INSERT INTO plant_care.season_type VALUES (4, 'Winter');

-- INSERT INTO plant_care.plant VALUES (id, plant_description, plant_type_id, season_type_id, plant_image, water_schedule, plant_name) 

-- New York plants
INSERT INTO plant_care.plant VALUES (1, 'a species of white flowering plant in the plantain family, Plantaginaceae',1, 2, 'https://cdn.shopify.com/s/files/1/1063/1186/products/Penstemon_digitalis_1024x1024.jpg?v=1553776300',1, 'Smooth White Beardtongue');

INSERT INTO plant_care.plant VALUES (2, 'a North American species of flowering plants in the sunflower family',1, 3, 'https://www.gardenia.net/storage/app/public/uploads/images/detail/OlcrDo50hRSifI6iRH1n8h4doEeFZ6TO81yD48HM.jpeg',2, 'Sneezeweed Helenium Autumnale');

INSERT INTO plant_care.plant VALUES (3, 'a member of the iris family more often seen in the wild growing in wetlands and along shorelines than in home gardens',1, 2, 'https://cdn11.bigcommerce.com/s-2drwt2az/images/stencil/original/products/15332/54329/apisjqjmg__81669.1592324021.jpg?c=2',2, 'Northern Blue Flag');

INSERT INTO plant_care.plant VALUES (4, 'an herbaceous perennial plant in the sunflower family',1, 1, 'https://www.thespruce.com/thmb/Hi42YDJjxXwQdSRUoSu3CRKcB7k=/3991x2664/filters:fill(auto,1)/joe-pye-weed-eupatorium-purpureum-1402848-02-e610c47f5a804f59b67d207161f5ca23.jpg',3, 'Sweet Joe-Pye Weed');

INSERT INTO plant_care.plant VALUES (5, 'a flower spike covered in deep blue flowersIt can form colonies when happily sited in medium to wet soils in light shade, but is not overly aggressive',1, 3, 'https://www.gardenia.net/storage/app/public/uploads/images/detail/main_picture_5446984dbb92d.jpg',2, 'Great Blue Lobelia');

INSERT INTO plant_care.plant VALUES (6, 'A versatile native shrub with excellent year-round interest, Nannyberry Viburnum features showy white flowers in May and burgundy leaf color in autumn with dark blue berries',2, 2, 'https://plants.gertens.com/Content/Images/Squares/J768-04.jpg',1, 'Nannyberry Viburnum lentago');

INSERT INTO plant_care.plant VALUES (7, 'a tall shrub or small tree, usually 15-25 ft. Young leaves are covered with soft, woolly hairs that disappear as the leaf matures.',3, 1, 'https://shop2.arborday.org/data/default/images/catalog/600/Turnkey/1/1-919.jpg',1, 'Serviceberry Amelanchier Arborea');

INSERT INTO plant_care.plant VALUES (8, 'Smooth, waxy, dark-green summer foliage changes to fluorescent yellow, orange, scarlet and purple in fall',3, 2, 'https://greatplainsnursery.com/wp-content/uploads/2016/03/Nyssa-sylvatica.jpg',3, 'Black Gum Nyssa Sylvatica');

-- Texas Plants
INSERT INTO plant_care.plant VALUES (9, 'a slowly spreading, semi-evergreen fern forming a mound of gently arching or pendant, twice divided, delicate fronds adorned with wiry, black stems',2, 2, 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_730/gen-workflow%2Fproduct-listing%2Fmaidenhairfernetsy',3, 'Southern Maidenhair Fern');

INSERT INTO plant_care.plant VALUES (10, 'has large, lavender flowers with a spiny, dome-shaped, orange or brown center',1, 2, 'https://www.gardeningknowhow.com/wp-content/uploads/2021/05/echinaceas.jpg',2, 'Purple Coneflower');

INSERT INTO plant_care.plant VALUES (11, 'excellent for low hedges, borders, or around foundations. The twiggy branches covered with fine-textured, glossy, dark green foliage take well to shearing',2, 1, 'https://gardeningsolutions.ifas.ufl.edu/images/plants/shrubs/yaupon_schillings_dwarf.jpg',2, 'Yaupon Holly');

INSERT INTO plant_care.plant VALUES (12, 'Grows 15 to 25-feet-tall with a 10-foot-spread. It has a narrow upright silhouette and dense foliage which lends itself well to being pruned into a tree form.',3, 4, 'https://www.landasbackporchgardens.com/wp-content/uploads/2021/01/1-30-20-Texas-mountain-laurel-credit-photo-by-Dr-Dan-Dawson.jpg',1, 'Texas Mountain Laurel');

INSERT INTO plant_care.plant VALUES (13, 'a deciduous shrub that bears clusters of purple flowers in the summer. The leaves have a fragrance similar to that of the herb sage',2, 1, 'https://www.naturehills.com/media/catalog/product/cache/1710302e448e18dd210bfc60a5382668/c/h/chaste_tree_600x600_2.webp',3, 'Chaste Tree');

INSERT INTO plant_care.plant VALUES (14, 'the perfect shrub for those who enjoy fragrant flowers. The shrub is covered in 2-3 inch wide, fragrant white flowers that will resist damage from late spring fros',2, 2, 'https://cdn.shopify.com/s/files/1/2045/8185/products/frost-proof-gardenia_600x600.jpg?v=1622123445',2, 'Frost Proof Gardenia');

INSERT INTO plant_care.plant VALUES (15, 'Stunning pure white flowers, up to 12 inches across! Strong, straight stems hold the huge flower heads up well, despite heavy rain.',2, 1, 'https://www.naturehills.com/pub/media/catalog/product/a/n/annabelle-hydrangea-overview-600x600_1.jpg',1, 'Annabelle Hydrangea');

INSERT INTO plant_care.plant VALUES (16, 'Flowers open white, change to pink and finally mature to pinkish-red, with multicolored flowering occurring in late summer as new flowering stems emerge to join mature flowers',1, 2, 'http://cdn.shopify.com/s/files/1/0059/8835/2052/products/Vanilla_Strawberry_Hydrangea_FGT_600x600_4867194f-d96b-47ef-8e0e-42a2f236ee41_grande.jpg?v=1612444357',1, 'Vanilla Strawberry Hydrangea');

--California
INSERT INTO plant_care.plant VALUES (17, 'herbaceous perennials that feature lance-shaped foliage and spikes of tubular flowers. The nickname of beardtongue refers to the pollen-free stamen that protrudes from the flower',1, 2, 'https://www.gardendesign.com/pictures/images/900x705Max/site_3/midnight-masquerade-penstemon-perennial-plant-proven-winners_14005.jpg',3, 'Penstemon Beardtongue ');

INSERT INTO plant_care.plant VALUES (18, 'a species of violet which bears yellow flowers. It is a small plant which bears thick to fleshy toothed or ridged oval leaves',1, 1, 'https://www.lawnstarter.com/blog/wp-content/uploads/2020/11/image-172.jpeg',3, 'Goosefoot Violet');

INSERT INTO plant_care.plant VALUES (19, 'a common wildflower of the coastal regions of Northern and Central California. It grows mainly at lower elevations, below 100 meters.',1, 1, 'https://www.gardenia.net/storage/app/public/uploads/images/detail/CFGh792.jpg',2, 'Iris Douglasiana');

INSERT INTO plant_care.plant VALUES (20, 'The flowers are tubular at the base and occur in a variety of shades from white to red, the most common color being a light orange',2, 1, 'https://www.gardenia.net/storage/app/public/uploads/images/detail/0sX486KzPNZeaFDEIGG7CT6KqodiN9eGupcwFgUe.jpeg',1, 'Bush Monkey flower');

INSERT INTO plant_care.plant VALUES (21, 'a large, refined, deciduous shrub with numerous spiny stems clad with small, somewhat rounded, three-lobed shiny green leaves',2, 4, 'https://www.lawnstarter.com/blog/wp-content/uploads/2020/11/image-166.jpeg',1, 'California Gooseberry');

-- NEW JERSEY 
INSERT INTO plant_care.plant VALUES (22, 'a perennial sunflowers that grow best from summer to mid-fall. They grow well in gardens with full sun. The false sunflower reaches about 3 feet tall and produces yellow flowers. It grows well in dry to moist soils.',1, 2, 'https://landscape-solutions.net/wp-content/uploads/False-Sunflower.jpg',1, 'False Sunflowers Heliopsis Helianthoides');

INSERT INTO plant_care.plant VALUES (23, 'a perennial that blooms in the summer and produces dozens of pink daisies. It grows best in full sun and well-drained soil',1, 4, 'https://landscape-solutions.net/wp-content/uploads/Pink-Tickseed.jpg',2, 'Pink Tickseed Coreopsis rosea');

INSERT INTO plant_care.plant VALUES (24, 'a native fern that does well in a variety of conditions. It easily can spread to fill in difficult areas from semi-shade to full sun or dry to damp.',2, 4, 'https://landscape-solutions.net/wp-content/uploads/Brackenfern.jpg',1, 'Bracken Fern Pteridium Aquilinum');

INSERT INTO plant_care.plant VALUES (25, 'a small shrub that grows about 6 feet high. It has showy pink flowers and needs regular pruning. This shrub is used as hedges and for general garden use.',2, 1, 'https://landscape-solutions.net/wp-content/uploads/Cameo-Flowering-Quince.jpg',3, 'Cameo Flowering Quince');

INSERT INTO plant_care.plant VALUES (26, 'a fast-growing, very straight shade tree. It produces yellow-orange flowers in the spring that are full of nectar.',3, 1, 'https://landscape-solutions.net/wp-content/uploads/Tulip-Poplar.jpg',3, 'Tulip Poplar Tree');

INSERT INTO plant_care.plant VALUES (27, 'one of the first trees to bloom in the spring. It offers white to pinkish blossoms and attractive smooth bark.',3, 1, 'https://landscape-solutions.net/wp-content/uploads/Serviceberry.jpg',2, 'Serviceberry Amelanchier Canadensis');

-- GEORGIA

INSERT INTO plant_care.plant VALUES (28, 'a deciduous tree in the Sapindaceae (soapberry) family. It may grow from 20 to 70 feet tall',3, 3, 'https://www.lsuagcenter.com/~/media/system/8/f/0/3/8f036150068ab45909ade079288934e9/sugar-maple-hztjpg.jpg',1, 'Southern Sugar Maple');

INSERT INTO plant_care.plant VALUES (29, 'a handsome shrub or small tree with showy thyrses (often called panicles) of deep red or yellow, campanulate flowers in early spring',3, 1, 'https://www.directnativeplants.com/wp-content/uploads/2020/03/Aesculus-pavia.jpg',2, 'Red Buckeye');

INSERT INTO plant_care.plant VALUES (30, 'a handsome shrub that has memorable long fluffy white flower clusters in early July.',2, 2, 'https://mortonarb.org/app/uploads/2020/12/37754_ca_object_representations_media_15583_large-1920x1282.5-c-default.jpg',1, 'Bottlebrush Buckeye');

INSERT INTO plant_care.plant VALUES (31, 'A climbing, woody vine reaching 50 ft. long with showy, orange-red, trumpet-shaped flowers',1, 1, 'https://www.gardenia.net/storage/app/public/uploads/images/detail/PL080338Optimized.jpg',3, 'Crossvine');

INSERT INTO plant_care.plant VALUES (32, 'it has long, arching branches and yellow-green fall foliage, but its most striking feature is the clusters of glossy, iridescent-purple fruit (sometimes white) which hug the branches at leaf axils in the fall and winter.',1, 4,'https://www.gardeningknowhow.com/wp-content/uploads/2013/08/Beautyberry-400x225.jpg',3, 'American Beautyberry');

INSERT INTO plant_care.plant VALUES (33, 'a native shrub that reaches 6 to 9 feet in height. The flowers are deep red to maroon, and last a month or more.',2, 1, 'https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Calycanthus-floridus--habit_--Phillip-Merit--CC-BY-NC-SA-2-0_12347313973_m.jpg',1, 'Eastern Sweetshrub');

-- FLORIDA

INSERT INTO plant_care.plant VALUES (34, 'They can grow in dry locations, and during the autumn season, their feathery foliage changes to copper color before they fall off. Their leaves then return with a flush of green during the spring season.',3, 3, 'https://www.allaboutgardening.com/wp-content/uploads/2021/08/Bald-Cypress-Tree-in-Florida.jpg',3, 'Bald Cypress');

INSERT INTO plant_care.plant VALUES (35, 'the Florida Maple is perfect for ornamental use and recreational use as a shade tree. It blooms lovely orange or yellow-colored fall leaves, and the plant itself has high heat tolerance',3, 3, 'https://www.allaboutgardening.com/wp-content/uploads/2021/08/Southern-Tree-With-Red-Leaves.jpg',2, 'Florida Maple');

INSERT INTO plant_care.plant VALUES (36, 'It has very lustrous and evergreen foliage. The Southern Magnolia blooms gorgeous creamy-white flowers during the spring and summer seasons, producing a lemony fragrance',1, 1, 'https://www.allaboutgardening.com/wp-content/uploads/2021/08/Beautiful-Large-and-Soft-White-Flowers-Growing-on-a-Tree.jpg',2, 'Southern Magnolia');

INSERT INTO plant_care.plant VALUES (37, 'it blooms red flowers and attracts butterflies and hummingbirds. The plant is beautiful but also very poisonous. So, ensure to keep this plant away from your children and pets',2, 3, 'https://www.allaboutgardening.com/wp-content/uploads/2021/08/Red-Pod-Flower-Petals-on-a-Tall-Plant.jpg',1, 'Coral Bean');

INSERT INTO plant_care.plant VALUES (38, 'They are very attractive to butterflies and hummingbirds, and when they mature, they produce berries that draw songbirds during late summer and the start of fall',2, 2, 'https://www.allaboutgardening.com/wp-content/uploads/2021/08/Sweet-Red-Flowers-on-a-Beautiful-Bush.jpg',2, 'Coral Honeysuckle');

INSERT INTO plant_care.plant VALUES (39, 'It produces bright red flowers attractive to hummingbirds and butterfly species such as Gulf Fritillary and Zebra Longwing',2, 4, 'https://www.allaboutgardening.com/wp-content/uploads/2021/08/Small-Red-Flowers-on-a-Bush.jpg',3, 'Firebush');


INSERT INTO plant_care.location VALUES (1, 'New York');
INSERT INTO plant_care.location VALUES (2, 'New York');
INSERT INTO plant_care.location VALUES (3, 'New York');
INSERT INTO plant_care.location VALUES (4, 'New York');
INSERT INTO plant_care.location VALUES (5, 'New York');
INSERT INTO plant_care.location VALUES (6, 'New York');
INSERT INTO plant_care.location VALUES (7, 'New York');
INSERT INTO plant_care.location VALUES (8, 'New York');
INSERT INTO plant_care.location VALUES (9, 'Texas');
INSERT INTO plant_care.location VALUES (10, 'Texas');
INSERT INTO plant_care.location VALUES (11, 'Texas');
INSERT INTO plant_care.location VALUES (12, 'Texas');
INSERT INTO plant_care.location VALUES (13, 'Texas');
INSERT INTO plant_care.location VALUES (14, 'Texas');
INSERT INTO plant_care.location VALUES (15, 'Texas');
INSERT INTO plant_care.location VALUES (16, 'Texas');
INSERT INTO plant_care.location VALUES (17, 'California');
INSERT INTO plant_care.location VALUES (18, 'California');
INSERT INTO plant_care.location VALUES (19, 'California');
INSERT INTO plant_care.location VALUES (20, 'California');
INSERT INTO plant_care.location VALUES (21, 'California');
INSERT INTO plant_care.location VALUES (22, 'New Jersey');
INSERT INTO plant_care.location VALUES (23, 'New Jersey');
INSERT INTO plant_care.location VALUES (24, 'New Jersey');
INSERT INTO plant_care.location VALUES (25, 'New Jersey');
INSERT INTO plant_care.location VALUES (26, 'New Jersey');
INSERT INTO plant_care.location VALUES (27, 'New Jersey');
INSERT INTO plant_care.location VALUES (28, 'Georgia');
INSERT INTO plant_care.location VALUES (29, 'Georgia');
INSERT INTO plant_care.location VALUES (30, 'Georgia');
INSERT INTO plant_care.location VALUES (31, 'Georgia');
INSERT INTO plant_care.location VALUES (32, 'Georgia');
INSERT INTO plant_care.location VALUES (33, 'Georgia');
INSERT INTO plant_care.location VALUES (34, 'Florida');
INSERT INTO plant_care.location VALUES (35, 'Florida');
INSERT INTO plant_care.location VALUES (36, 'Florida');
INSERT INTO plant_care.location VALUES (37, 'Florida');
INSERT INTO plant_care.location VALUES (38, 'Florida');
INSERT INTO plant_care.location VALUES (39, 'Florida');

