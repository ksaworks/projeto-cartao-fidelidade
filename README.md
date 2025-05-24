# 💳 Previsão de Fidelidade com IA

[![Python](https://img.shields.io/badge/Python-3.10+-blue?logo=python)](https://www.python.org/)
[![Gradio](https://img.shields.io/badge/Gradio-Interface-black?logo=gradio)](https://gradio.app/)
[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)]()

Projeto de Machine Learning que utiliza uma Árvore de Decisão para prever a propensão de clientes aderirem a cartões de fidelidade com base em dados comportamentais.

---

## 🚀 Demonstração

🖥 Acesse o painel interativo (temporário via Gradio):  
[https://0f7d5acbc18cc9ac6a.gradio.live/](https://0f7d5acbc18cc9ac6a.gradio.live/)

![preview](https://user-images.githubusercontent.com/00000000/preview-arvore.png)  
<sub>*Exemplo de visualização da árvore de decisão gerada pelo modelo*</sub>

---

## 🧠 Tecnologias Utilizadas

- `Python 3.10+`
- `scikit-learn` – modelo de árvore de decisão
- `pandas` & `numpy` – manipulação de dados
- `matplotlib` – visualização da árvore
- `Gradio` – painel web interativo para predição
- `SQLite` – base de dados simulada

---

## 📁 Estrutura

```
projeto_cartao/
├── app.py                 # Interface Gradio com modelo treinado
├── modelo_cartao.pkl      # Modelo serializado com joblib
├── requirements.txt       # Dependências
└── README.md              # Este arquivo
```

---

## ⚙️ Como Executar Localmente

1. Clone este repositório:

```bash
git clone https://github.com/ksaworks/projeto-cartao-fidelidade.git
cd projeto-cartao-fidelidade
```

2. Crie um ambiente virtual (opcional):

```bash
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate   # Windows
```

3. Instale as dependências:

```bash
pip install -r requirements.txt
```

4. Execute a aplicação:

```bash
python app.py
```

---

## 📊 Modelo

- O modelo foi treinado com `DecisionTreeClassifier` com profundidade máxima controlada (`max_depth=4`)
- Features utilizadas: ano, mês, voos, distância, salário, CLV etc.
- Labels: 3 tipos de cartão — **Aurora**, **Nova** e **Star**

---

## 👤 Autor

**Kelvin Andrade**  
🔗 [LinkedIn](https://www.linkedin.com/in/kelvinandradeworks)

---

## 📌 Observações

- Link do Gradio é temporário. Para executar novamente, rode localmente com `python app.py`
- Ideal para seu portfólio de Data Science com foco em aplicação real de IA com interface amigável.

