from func_wp import *

class Flag(object):
    def __init__(self,data):
        self._name = int(data[0])
        self._rare = int(data[1])
        self._mgc = int(data[2])
        self._enmgc = int(data[3])
        self._en = int(data[4])
        self._hole = int(data[5])
        self._in = int(data[6])
        self._syn = int(data[7])
        self._attr = int(data[8])
        self._kind = data[9]
    def dcd_name(self):
        if self._name == 0:
            return 1
        elif self._name == 1:
            return 3
        elif self._name ==2:
            return 5
    def dcd_descrip(self):
        if self._name == 0:
            return 2
        elif self._name == 1:
            return 4
        elif self._name ==2:
            return 6
    def dcd_rank(self):
        if self._name == 0:
            c, r = ((245, 222, 179), '<未鉴定>')
        else:
            switch = {
                1: lambda c, r: ((220, 220, 220), '<普通>'),
                2: lambda c, r: ((0, 130, 255), '<特制>'),
                3: lambda c, r: ((0, 220, 124), '<非凡>'),
                4: lambda c, r: ((193, 90, 234), '<绝品>'),
                5: lambda c, r: ((255, 120, 0), '<传奇>'),
                6: lambda c, r: ((255, 215, 0), '<神铸>'),
                7: lambda c, r: ((220, 20, 60), '<魔幻>'),
            }
            try:
                c, r = switch[self._rare]('', '')
            except KeyError as e:
                pass
        return c, r
    def cnt_star(self):
        stars = colored('★'*self._en, c_en)
        stars2 = colored('★'*self._mgc, c_mgc)
        stars = stars + stars2
        return stars
    def cnt_inhole(self):
        hole = colored('●'*self._in+'○'*(self._hole-self._in), c_in)
        return hole
class Name(object):
    def __init__(self,data,flag):
        self._flag_init = flag
        self._data = data
        self._kind = sty.ef.italic + flag._kind + sty.rs.italic
        self._curve = str(colored(data[0],c_curve))
    @property
    def _flag(self):
        return self._flag_init
    @property
    def _c_rare(self):
        c_rare, r_rare = self._flag.dcd_rank()
        return c_rare
    @property
    def _name(self):
        return colored(('['+self._data[self._flag.dcd_name()]+']'),self._c_rare)
    @property
    def _rank(self):
        c_rare, r_rare = self._flag.dcd_rank()
        return colored(r_rare,c_rare)
    @property
    def _star(self):
        return self._flag.cnt_star()
    @property
    def _inhole(self):
        return self._flag.cnt_inhole()
    @property
    def _descrip(self):
        return cut_in_len(self._data[self._flag.dcd_descrip()],lens)
    def __str__(self):
        out = [self._name,self._rank,self._kind,self._descrip]
        if self._flag._name != 0:
            out.insert(3,self._curve)
            if self._flag._hole != 0:
                out.insert(4,self._inhole)
            if self._flag._en != 0:
                out.insert(4,self._star)
        return piece_in_line(out,'\n')
class Elem4(object):
    def __init__(self, data,flag):
        for i in range(4): data[i] = str(data[i])
        for i in range(4,7):
            if data[i] == '0':
                data[i] = ''
            else:
                data[i] = ' +'+str(data[i])
            data[i] = colored(data[i], c_en)
        self._flag_init = flag
        self._data = data
    @property
    def _flag(self):
        return self._flag_init
    @property
    def _wegt(self):
        wg = int(self._data[0])
        if wg == 0 : wgn = '无物理重量'
        elif wg == 1 : wgn = '纸级'
        elif wg == 2 : wgn = '暗器级'
        elif wg == 3 : wgn = '匕首级'
        elif wg == 4 : wgn = '短剑级'
        elif wg == 5 : wgn = '佩剑级'
        elif wg == 6 : wgn = '重剑级'
        elif wg == 7 : wgn = '重型武器级'
        elif wg == 8 : wgn = '重型机械级'
        elif wg == 9 : wgn = '规格外超重级'
        return '▹ 重量: <'+ wgn+'>'
    @property
    def _atk(self):
        if self._flag._name == 0 or self._flag._en ==0:
            return '▹ 攻击力: '+self._data[1]
        else:
            return '▹ 攻击力: '+self._data[1]+self._data[4]
    @property
    def _speed(self):
        if self._flag._name == 0 or self._flag._en ==0:
            return '▹ 攻击速度: '+self._data[2]
        else:
            return '▹ 攻击速度: '+self._data[2]+self._data[5]
    @property
    def _ranges(self):
        if self._flag._name == 0 or self._flag._en ==0:
            return '▹ 攻击范围: '+self._data[3]
        else:
            return '▹ 攻击范围: '+self._data[3]+self._data[6]
    def __str__(self):
        out = [self._wegt,self._atk,self._speed,self._ranges]
        return piece_in_line(out,'\n')
class Item(object):
    def __init__(self,data,flag):
        self._class = int(data[0]) # 类别flag
        self._flag_init = flag
        self._num_rare = flag._rare # 稀有度数字标签
        if self._class < 3: # 真名/高稀/附魔--->技能
            self._abliname = '▸ '+str(data[1])+':' # 特殊效果名
            self._ablidtl = data[2] # 效果描述
        elif self._class == 3 or self._class == 7: # 最终强化/共鸣--->常时描述效果
            self._abliname = '◆ '+str(data[1])+':' # 特殊效果名
            self._ablidtl = str(data[2]) # 效果描述
        elif self._class == 4 or self._class == 8: # 魔强/固有--->属性
            self._abliname = '▹ '+str(data[1]) # 属性名1
            self._ablidtl = '+'+str(data[2]) # 数值1
            if self._class == 4: self._attr_color = c_en
            else: self._attr_color = str(data[3])
        elif self._class == 5 or self._class == 6: # 镶嵌--->孔
            self._abliname = '● '+str(data[2]) # 属性名2
            self._ablidtl = '+'+str(data[3]) # 数值2
            self._jewel = '('+str(data[1])+')'  # 宝石
    @property
    def _flag(self):
        return self._flag_init
    def __str__(self):
        c = get_color(self)
        out = [self._abliname,self._ablidtl]
        if self._class == 5 or self._class == 6:
            out.append(self._jewel)
        return colored(cut_in_len(piece_in_line(out,' '), lens), c)


class Weapon(object):
    def __init__(self,data):
        data = data[1:]
        self._flag = Flag(data[0])
        self._name = Name(data[1],self._flag)
        self._elem4 = Elem4(data[2],self._flag)
        self._items = []
        print(len(data[3]))
        for i in range(len(data[3])):
            self._items.append(Item(data[3][i],self._flag))

    def naming(self):
        if self._flag._name != 2:
            self._flag._name += 1
        else:
            print('【无法对该武器继续进行命名操作】')


    def __str__(self):
        liiiiine = '-'*45
        used = 0
        print(liiiiine)

        # 输出名字
        print(self._name,end='')

        if self._flag._name == 2 or self._flag._en == 6 or self._flag._rare > 4: print('')
        # 输出技能类项目
        for i in range(len(self._items)):
            if self._items[i]._flag._name != 0:
                if self._items[i]._class == 0 and self._flag._name == 2:
                    print(self._items[i], end='')
                    used += 1
                if self._items[i]._class ==1 or self._items[i]._class == 2:
                    print(self._items[i],end='')
                    used += 1

        print('')
        # 输出基本信息
        print(self._elem4)

        # 输出强化类项目
        for i in range(len(self._items)):
            if self._items[i]._flag._name != 0:
                if self._items[i]._class == 3 or self._items[i]._class == 4:
                    print(self._items[i],end='')
                    used += 1

        if self._flag._name != 0:
            if self._flag._name != 2: # 真名属性未显示
                if used < len(self._items)-1 : # 除了真名还有其他属性
                    print('')
            else: # 显示了真名属性
                if used < len(self._items) : # 除了真名还有其他属性
                    print('')
        # 输出其他项目
        for i in range(len(self._items)):
            if self._items[i]._flag._name != 0:
                if self._items[i]._class > 4 :
                    print(self._items[i],end='')
        return liiiiine
