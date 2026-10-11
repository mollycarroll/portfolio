---
name: Icarus the AI Resume
year: '2026'
summary: AI-powered chatbot that represents me in basic tech interview recruiting Q&A scenarios
stack: [Python, FastAPI, Hugging Face, LangChain]
url: https://github.com/mollycarroll/icarus-001
screenshot: ../../assets/projects/ai-resume.png
order: 1
---

## Overview

The AI Resume chatbot uses Retrieval-Augmented Generation (RAG) to answer job interview questions as my AI representative.

## Tech specs

- Uses a FastAPI backend for processing (embedding) the user's question, retrieves data from a vector store and generates the answer
- LangChain employs its LCEL pipeline for embeddings and inference, using Hugging Face models for both cases
- Supabase (PostgreSQL) is the vector store where initial resume data is ingested and against which future questions are fielded
