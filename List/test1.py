class No:

    def __init__(self, info):
        self.info = info
        self.prox = None

class Lista:

    def __init__(self):

        self.prim = None
        self.tam = 0


    def show_list(self):

        if self.prim is None:
            print("Lista está vazia")

        else:
            temp = self.prim

            while temp is not None:
                print(temp.info)
                temp = temp.prox




a = No(34)

b = No(2)

c = No(22)

a.prox = b
b.prox = c

# print(a.info)

# print(a.prox.info)

# print(a.prox.prox.info)


listx = Lista()

listx.prim = a

listx.show_list()