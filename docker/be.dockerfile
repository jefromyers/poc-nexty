FROM python:3.11.0-alpine

ENV PYTHONUNBUFFERED 1
WORKDIR /backend

COPY ./backend/requirements.txt /backend/requirements.txt
RUN pip install --no-cache-dir -r /backend/requirements.txt
COPY ./backend /backend
