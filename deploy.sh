#!/usr/bin/env bash
set -e

LOCALPATH='./dist/projet3-funlab'
REMOTEPATH='api.funlab.fr/public'

FTP_HOST='funlab.fr'

lftp -f "
open ftp://$FTP_HOST
user $SFTP_USER $SFTP_PASSWORD
set ftp:ssl-allow no
mirror --continue --reverse --delete $LOCALPATH $REMOTEPATH
bye
"
