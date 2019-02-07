#!/bin/bash

get_file_type() {
    echo $( echo "$1" | tr -s ' ' | cut -d ' ' -f1 )
}

get_file_name() {
    echo $( echo "$line" | tr -s ' ' | cut -d ' ' -f9 )
}


purge() {
  local array=$(curl -u  ${SFTP_USER}:${SFTP_PASSWORD} ftp://funlab.fr/api.funlab.fr/public/$1);

  while read -r line; do
      local type=$(get_file_type $line)
      local file=$(get_file_name $line)

      if [[ $type = d* && $file != "public" && $file != "." && $file != ".." ]]
      then
        purge "$1$file/"
        echo "Remove directory ftp://funlab.fr/api.funlab.fr/public/$1$file/"
        curl -u ${SFTP_USER}:${SFTP_PASSWORD} ftp://funlab.fr/api.funlab.fr/public/ -Q "RMD api.funlab.fr/public/$1$file/"
      elif [[ $type = -* ]]
      then
        echo "Remove file ftp://funlab.fr/api.funlab.fr/public/$1$file"
        curl -u ${SFTP_USER}:${SFTP_PASSWORD} ftp://funlab.fr/api.funlab.fr/public/ -Q "DELE api.funlab.fr/public/$1$file"
      fi

  done <<< "$array"
}

purge ""
