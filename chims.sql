PGDMP     .                     {            chims    15.3    15.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16464    chims    DATABASE     y   CREATE DATABASE chims WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE chims;
                postgres    false            �            1259    16466    chims    TABLE     (  CREATE TABLE public.chims (
    id integer NOT NULL,
    name character varying NOT NULL,
    a0 double precision NOT NULL,
    a1 double precision NOT NULL,
    a2 double precision NOT NULL,
    a3 double precision NOT NULL,
    a4 double precision NOT NULL,
    a5 double precision NOT NULL
);
    DROP TABLE public.chims;
       public         heap    postgres    false            �            1259    16465    chims_id_seq    SEQUENCE     �   CREATE SEQUENCE public.chims_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.chims_id_seq;
       public          postgres    false    215            �           0    0    chims_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.chims_id_seq OWNED BY public.chims.id;
          public          postgres    false    214            e           2604    16469    chims id    DEFAULT     d   ALTER TABLE ONLY public.chims ALTER COLUMN id SET DEFAULT nextval('public.chims_id_seq'::regclass);
 7   ALTER TABLE public.chims ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            �          0    16466    chims 
   TABLE DATA           A   COPY public.chims (id, name, a0, a1, a2, a3, a4, a5) FROM stdin;
    public          postgres    false    215   (       �           0    0    chims_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.chims_id_seq', 3, true);
          public          postgres    false    214            g           2606    16473 $   chims PK_9cdea8b1729a352f6f6bee1dc10 
   CONSTRAINT     d   ALTER TABLE ONLY public.chims
    ADD CONSTRAINT "PK_9cdea8b1729a352f6f6bee1dc10" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.chims DROP CONSTRAINT "PK_9cdea8b1729a352f6f6bee1dc10";
       public            postgres    false    215            �   �   x�5��mC1�ki�'��(r���#�<A�4)�� o>�VC�p��@n뺾��k�4�LA=��v� �I$�"�s�F��:-MɜU�r�Q*'D�4.Vz4�����.����\�Z�^^ti���aC��@�N��IK�����(�\�5Jy��A��!B9�Adxx 
�g��7CdU�yLtm�v_���EÔZwh'O�p����Ba�GmVș��}:��}�)Yh���Ym     