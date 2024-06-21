#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "postgres" <<-EOSQL
    CREATE DATABASE dbpide WITH ENCODING 'UTF8' LC_COLLATE='es_PE.utf8' LC_CTYPE='es_PE.utf8' TEMPLATE=template0;
    ALTER DATABASE dbpide SET timezone TO 'America/Lima';
    GRANT ALL PRIVILEGES ON DATABASE dbpide TO postgres;
EOSQL
