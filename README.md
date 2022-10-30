# node source env variable
echo "export SENDGRID_API_KEY='key'" > sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env