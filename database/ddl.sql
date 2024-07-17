-- Table: public.Cartoon

-- DROP TABLE IF EXISTS public."Cartoon";

CREATE TABLE IF NOT EXISTS public."Cartoon"
(
    id integer NOT NULL DEFAULT nextval('"Cartoon_id_seq"'::regclass),
    nome text COLLATE pg_catalog."default" NOT NULL,
    descricao text COLLATE pg_catalog."default" NOT NULL,
    foto text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Cartoon_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Cartoon"
    OWNER to cartoonwiki_pg_user;