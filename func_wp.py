import sty

c_None = (255,255,255)
c_en = (50, 205, 50)  # 强化颜色
c_truename = (255, 20, 147)  # 真名颜色
c_curve = (240, 128, 128)  # 铭文颜色
c_in =  (0, 255, 255) # 镶嵌颜色
c_syn = (170, 205, 255) # 共鸣颜色
c_mgc = (255,255,0) # 附魔颜色

lens = 28


'''给字符串列表中的每个字符串附上颜色sty，会自动检测是字符串还是字符串列表
（string,(255,255,255)）'''
def colored(strings, color):
    c = eval('sty.fg' + str(color))
    if str(type(strings)) == "<class 'str'>":
        strings = c + strings + sty.fg.rs
        return strings
    if str(type(strings)) == "<class 'list'>":
        for i in range(len(strings)):
            strings[i] = c + strings[i] + sty.fg.rs
        return strings

'''
输出某字符串，但实现在特定长度时自动拆分
（待输出字符串，换行长度）
'''
def cut_in_len(strings, length):
    j = 0
    out = ['']
    for i in range(len(strings)):
        if i!=0 and i%length == 0:
            out.append('')
            j += 1
        out[j] += strings[i]
    outstr =''
    for part in out:
        outstr += part+'\n'
    return(outstr)

'''
颜色获取插件
'''
def get_rarecolor(number):
        switch = {
            1: lambda c: (220, 220, 220),
            2: lambda c: (0, 130, 255),
            3: lambda c: (0, 220, 124),
            4: lambda c: (193, 90, 234),
            5: lambda c: (255, 120, 0),
            6: lambda c: (255, 215, 0),
            7: lambda c: (220, 20, 60),
        }
        try:
            c = switch[number]('')
        except KeyError as e:
            pass
        return c
def get_color(itemself):
    flag = itemself._class
    if flag == 0 : c = c_truename
    elif flag == 1 : c = get_rarecolor(itemself._num_rare)
    elif flag == 2 : c = c_mgc
    elif flag == 3 : c = c_en
    elif flag == 4 : c = c_en
    elif flag == 5 : c = c_in
    elif flag == 6 : c = c_in
    elif flag == 7 : c = c_syn
    elif flag == 8 : c = itemself._attr_color
    return c

'''
将list的元素拼成一行，用synx隔开每个元素
'''
def piece_in_line(list,synx):
    strings = ''
    for i in range(len(list)):
        strings = strings + list[i]
        if i != (len(list)-1):
            strings = strings +synx
    return strings


# -----------------------------------------------------------------


'''
读取数据
'''
def LOADING(DATA):
    out, final, flag = [], [], 0
    file = open(DATA,'r')
    for line in file:
        if line[0:6] == '[CODE]': flag = 1
        elif line[0:5] == '[END]':
            flag, items, output = 0, [], out[0:4]
            for x in out[4:]:
                items.append(x)
            output.append(items)
            final.append(output)
            out = []
        if flag == 1:
            out.append(list(line.strip('\n').split('  ')))
    return final