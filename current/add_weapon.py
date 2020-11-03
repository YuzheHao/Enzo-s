from support.amiya import amiya

work_path = '/Users/Yuzhe/Documents/projects/peanuts/Enzo-s/current/'

save = amiya.read_lines_in_file(work_path+'gallery.js')
text = amiya.read_lines_in_file(work_path+'Lina_G.json')

save.pop(-1)
save[-1] += ','
text.pop(0)
text[0] = text[0].strip(' ')
text.append('}')
text.pop(-2)
amiya.write_lines_to_file(save+text, work_path+'gallery.js', 'w')