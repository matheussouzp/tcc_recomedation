# Alvo padrão: rodar backend e frontend
.DEFAULT_GOAL := run

# Variáveis
BACK_DIR := tcc_back
FRONT_DIR := tcc_front

# Comando para instalar as dependências do backend
install-back:
    @echo "Instalando dependências do backend..."
    @cd $(BACK_DIR) && npm install

# Comando para instalar as dependências do frontend
install-front:
    @echo "Instalando dependências do frontend..."
    @cd $(FRONT_DIR) && npm install

# Comando para rodar o backend
run-back:
    @echo "Rodando o backend..."
    @cd $(BACK_DIR) && npm run start

# Comando para rodar o frontend
run-front:
    @echo "Rodando o frontend..."
    @cd $(FRONT_DIR) && npm run start

# Comando para rodar o backend e frontend em sequência
run: install-back install-front run-back run-front
    @echo "Ambiente completo rodando!"
