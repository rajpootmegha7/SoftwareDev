-- Author: Pranjal Jain
-- Database: plant_care

-- DROP DATABASE IF EXISTS plant_care;

CREATE DATABASE plant_care
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

—————————————————————————————————————

-- SCHEMA: plant_care

-- DROP SCHEMA IF EXISTS plant_care ;

CREATE SCHEMA IF NOT EXISTS plant_care
    AUTHORIZATION postgres;

—————————————————————————————————————

-- Table: plant_care.user

-- DROP TABLE IF EXISTS plant_care."user";

CREATE TABLE IF NOT EXISTS plant_care."user"
(
    user_id bigint NOT NULL DEFAULT nextval('plant_care.user_user_id_seq'::regclass),
    name character varying(100) COLLATE pg_catalog."default",
    contact_number character varying(10) COLLATE pg_catalog."default",
    password character varying(20) COLLATE pg_catalog."default",
    security_question character varying(200) COLLATE pg_catalog."default",
    security_answer character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT user_pkey PRIMARY KEY (user_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS plant_care."user"
    OWNER to postgres;

—————————————————————————————————————

-- Table: plant_care.planner

-- DROP TABLE IF EXISTS plant_care.planner;

CREATE TABLE IF NOT EXISTS plant_care.planner
(
    user_id bigint NOT NULL,
    planner_json character varying(2000) COLLATE pg_catalog."default",
    CONSTRAINT "user" FOREIGN KEY (user_id)
        REFERENCES plant_care."user" (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS plant_care.planner
    OWNER to postgres;

—————————————————————————————————————


-- Table: plant_care.calendar 

-- DROP TABLE IF EXISTS plant_care."calendar ";

CREATE TABLE IF NOT EXISTS plant_care."calendar "
(
    user_id bigint NOT NULL,
    calendar_json character varying(2000) COLLATE pg_catalog."default",
    CONSTRAINT "user" FOREIGN KEY (user_id)
        REFERENCES plant_care."user" (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS plant_care."calendar "
    OWNER to postgres;

—————————————————————————————————————

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

—————————————————————————————————————

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

—————————————————————————————————————

-- Table: plant_care.plant

-- DROP TABLE IF EXISTS plant_care.plant;

CREATE TABLE IF NOT EXISTS plant_care.plant
(
    plant_id bigint NOT NULL DEFAULT nextval('plant_care.plant_plant_id_seq'::regclass),
    "Description " character varying(10000) COLLATE pg_catalog."default",
    plant_type_id bigint,
    season_type_id integer,
    image bytea,
    water_schedule integer,
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

—————————————————————————————————————

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

—————————————————————————————————————



