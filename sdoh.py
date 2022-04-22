import os

word = 'УЕБИЩЕ'
wordList = list(word)
ochko = ''

# --- ОБЬЯВЛЕНИЕ ПЕРЕМЕННЫХ ---
letter = [] # список с буквами введенными
trying = 0 # счетчик попыток

resultList = [] # список с буквами результата
for i in range(len(word)): # len(word) - кол-во букв в слове
    resultList.append(['_']) # заполняется пробелами - '_'

result = '' # результат для вывода формата string
for i in range(len(word)):
    result += resultList[i][0] + ' '


# --- ЗАПУСК ПРОГРАММЫ ---
os.system("cls")
print('Вешайтесь нахуй!')
print(result)

# --- БЕСКОНЕЧНЫЙ ЦИКЛ ИГРЫ --- (выход из цикла через ф-ию break)
while True:

    # --- проверка на проебченко
    if trying == 10:
        print('Ты проебал')
        break # выход из цикла while


    inp = input()
    letter.append(inp) # добавляем к списку введенную бiкву

    os.system("cls")

    # --- проверка на ошибку
    trycheck = False

    for i in range(len(wordList)):
        if wordList[i] == inp:
            trycheck = True

    if trycheck == False:
        trying += 1


    # --- замена данных в результате
    for i in range(len(word)):
        for x in range(len(letter)):
            if letter[x] == wordList[i]:
                resultList[i] = wordList[i]

    result = ''

    for i in range(len(word)):
        result += resultList[i][0] + ' '


    # --- принт кол-ва попыток + результата
    print(f'У тебя осталось {10 - trying} попыток!)')
    print(result)


    # --- проверка на уебанченко (выигрыш) должно выйти из цикла если wincheck будет равна кол-ву букв в данном слове
    winCheck = 0
    for i in range(len(word)):
        if resultList[i][0] != '_':
            winCheck += 1

    if winCheck == len(word):
        print('ПАБЕДА ПАБЕДА')
        break # выход из цикла while
