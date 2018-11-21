FROM python:3

CMD mkdir -p /var/tutira
WORKDIR /var/django-start
VOLUME /var/django-start django-start

COPY requirements.txt requirements.txt
RUN django-admin.py startproject tutira

COPY tutira/* tutira

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
