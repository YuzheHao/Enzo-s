from weapon_3 import *


dt = LOADING('SAVEDATA')
for i in range(3):
    wp = Weapon(dt[i])
    print(wp)
    wp.naming()
    print(wp)
    wp.naming()
    print(wp)

