import sys
sys.path.insert(0,'/Users/Yuzhe/Documents/projects/peanuts/amiya')
import amiya

work_path = '/Users/Yuzhe/Documents/projects/peanuts/Enzo-s/current/'

save = amiya.read_lines_in_file(work_path+'gallery.js')
text = amiya.read_lines_in_file(work_path+'/gallery/Chenxi_L.json')

save.pop(-1)
save[-1] += ','
text.pop(0)
text[0] = text[0].strip(' ')
text.append('}')
text.pop(-2)
amiya.write_lines_to_file(save+text, work_path+'gallery.js', 'w')