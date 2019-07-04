Search.setIndex({docnames:["atomic_p2p","atomic_p2p.peer","atomic_p2p.peer.communication","atomic_p2p.peer.entity","atomic_p2p.peer.monitor","atomic_p2p.peer.monitor.communication","atomic_p2p.utils","atomic_p2p.utils.communication","atomic_p2p.utils.logging","dns_resolver_test","index","modules","run"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["atomic_p2p.rst","atomic_p2p.peer.rst","atomic_p2p.peer.communication.rst","atomic_p2p.peer.entity.rst","atomic_p2p.peer.monitor.rst","atomic_p2p.peer.monitor.communication.rst","atomic_p2p.utils.rst","atomic_p2p.utils.communication.rst","atomic_p2p.utils.logging.rst","dns_resolver_test.rst","index.rst","modules.rst","run.rst"],objects:{"":{atomic_p2p:[0,0,0,"-"]},"atomic_p2p.AtomicP2P":{__init__:[0,2,1,""],start:[0,2,1,""],stop:[0,2,1,""]},"atomic_p2p.local_monitor":{LocalMonitor:[0,1,1,""]},"atomic_p2p.local_monitor.LocalMonitor":{command_recv:[0,2,1,""],decrypt:[0,2,1,""],encrypt:[0,2,1,""],registerCommand:[0,2,1,""],registerHandler:[0,2,1,""],run:[0,2,1,""],stop:[0,2,1,""]},"atomic_p2p.peer":{Peer:[1,1,1,""],command:[1,0,0,"-"],communication:[2,0,0,"-"],dns_resolver:[1,0,0,"-"],entity:[3,0,0,"-"],monitor:[4,0,0,"-"]},"atomic_p2p.peer.Peer":{__init__:[1,2,1,""],add_peer_in_net:[1,2,1,""],connectlist:[1,3,1,""],del_peer_in_net:[1,2,1,""],get_peer_info_by_host:[1,2,1,""],handler_broadcast_packet:[1,2,1,""],handler_unicast_packet:[1,2,1,""],is_peer_in_net:[1,2,1,""],new_tcp_long_conn:[1,2,1,""],onProcess:[1,2,1,""],peer_pool:[1,3,1,""],pend_packet:[1,2,1,""],pend_socket:[1,2,1,""],pend_socket_to_rm:[1,2,1,""],pkt_handlers:[1,3,1,""],run:[1,2,1,""],select_handler:[1,2,1,""],server_info:[1,3,1,""],start:[1,2,1,""],stop:[1,2,1,""]},"atomic_p2p.peer.command":{HelpCmd:[1,1,1,""],JoinCmd:[1,1,1,""],LeaveNetCmd:[1,1,1,""],ListCmd:[1,1,1,""],SendCmd:[1,1,1,""]},"atomic_p2p.peer.communication":{msg:[2,0,0,"-"],net:[2,0,0,"-"]},"atomic_p2p.peer.communication.msg":{MessageHandler:[2,1,1,""]},"atomic_p2p.peer.communication.msg.MessageHandler":{on_recv_pkt:[2,2,1,""],on_send_pkt:[2,2,1,""],pkt_type:[2,3,1,""]},"atomic_p2p.peer.communication.net":{AckNewMemberHandler:[2,1,1,""],CheckJoinHandler:[2,1,1,""],DisconnectHandler:[2,1,1,""],JoinHandler:[2,1,1,""],NewMemberHandler:[2,1,1,""]},"atomic_p2p.peer.communication.net.AckNewMemberHandler":{on_recv_pkt:[2,2,1,""],on_send_pkt:[2,2,1,""],pkt_type:[2,3,1,""]},"atomic_p2p.peer.communication.net.CheckJoinHandler":{on_recv_pkt:[2,2,1,""],on_send_pkt:[2,2,1,""],pkt_type:[2,3,1,""]},"atomic_p2p.peer.communication.net.DisconnectHandler":{on_recv_pkt:[2,2,1,""],on_send_pkt:[2,2,1,""],pkt_type:[2,3,1,""]},"atomic_p2p.peer.communication.net.JoinHandler":{on_recv_pkt:[2,2,1,""],on_send_pkt:[2,2,1,""],pkt_type:[2,3,1,""]},"atomic_p2p.peer.communication.net.NewMemberHandler":{on_recv_pkt:[2,2,1,""],on_send_pkt:[2,2,1,""],pkt_type:[2,3,1,""]},"atomic_p2p.peer.dns_resolver":{DNSResolver:[1,1,1,""]},"atomic_p2p.peer.dns_resolver.DNSResolver":{__init__:[1,2,1,""],change_ns:[1,2,1,""],forward:[1,2,1,""],reverse:[1,2,1,""],srv:[1,2,1,""],sync_from_DNS:[1,2,1,""]},"atomic_p2p.peer.entity":{peer_info:[3,0,0,"-"],peer_status:[3,0,0,"-"]},"atomic_p2p.peer.entity.peer_info":{PeerInfo:[3,1,1,""]},"atomic_p2p.peer.entity.peer_status":{PeerStatus:[3,1,1,""],StatusType:[3,1,1,""]},"atomic_p2p.peer.entity.peer_status.PeerStatus":{__init__:[3,2,1,""],last_update_ts:[3,3,1,""],no_response_count:[3,3,1,""],status:[3,3,1,""],toDict:[3,2,1,""],update:[3,2,1,""]},"atomic_p2p.peer.entity.peer_status.StatusType":{NO_RESP:[3,3,1,""],PENDING:[3,3,1,""],UNKNOWN:[3,3,1,""],UPDATED:[3,3,1,""]},"atomic_p2p.peer.monitor":{Monitor:[4,1,1,""],command:[4,0,0,"-"],communication:[5,0,0,"-"]},"atomic_p2p.peer.monitor.Monitor":{onProcess:[4,2,1,""],on_recv_pkt:[4,2,1,""],removeMonitorlist:[4,2,1,""],run:[4,2,1,""],select_handler:[4,2,1,""]},"atomic_p2p.peer.monitor.command":{HelpCmd:[4,1,1,""],ListCmd:[4,1,1,""],ManualCmd:[4,1,1,""],PauseCmd:[4,1,1,""],PeriodCmd:[4,1,1,""],ResetCmd:[4,1,1,""],VerboseCmd:[4,1,1,""]},"atomic_p2p.peer.monitor.communication":{CheckHandler:[5,1,1,""]},"atomic_p2p.peer.monitor.communication.CheckHandler":{on_recv_pkt:[5,2,1,""],on_recv_reject_pkt:[5,2,1,""],on_send_pkt:[5,2,1,""],pkt_type:[5,3,1,""]},"atomic_p2p.utils":{command:[6,0,0,"-"],communication:[7,0,0,"-"],host_valid:[6,4,1,""],logging:[8,0,0,"-"],manager:[6,0,0,"-"],security:[6,0,0,"-"]},"atomic_p2p.utils.command":{Command:[6,1,1,""]},"atomic_p2p.utils.command.Command":{__init__:[6,2,1,""],_execute:[6,2,1,""],_on_command_recv:[6,2,1,""]},"atomic_p2p.utils.communication":{handler:[7,0,0,"-"],is_ssl_socket_open:[7,4,1,""],packet:[7,0,0,"-"],valid_ipv4_format:[7,4,1,""],valid_ipv6_format:[7,4,1,""]},"atomic_p2p.utils.communication.handler":{Handler:[7,1,1,""]},"atomic_p2p.utils.communication.handler.Handler":{__init__:[7,2,1,""],on_recv:[7,2,1,""],on_recv_pkt:[7,2,1,""],on_recv_reject_pkt:[7,2,1,""],on_send:[7,2,1,""],on_send_pkt:[7,2,1,""],on_send_reject_pkt:[7,2,1,""],peer:[7,3,1,""],pkt_type:[7,3,1,""]},"atomic_p2p.utils.communication.packet":{Packet:[7,1,1,""]},"atomic_p2p.utils.communication.packet.Packet":{"export":[7,3,1,""],__init__:[7,2,1,""],clone:[7,2,1,""],data:[7,3,1,""],deserilize:[7,5,1,""],dst:[7,3,1,""],is_reject:[7,2,1,""],redirect_to_host:[7,2,1,""],serilize:[7,5,1,""],set_reject:[7,2,1,""],src:[7,3,1,""],to_dict:[7,2,1,""]},"atomic_p2p.utils.logging":{formatters:[8,0,0,"-"],getLogger:[8,4,1,""],handlers:[8,0,0,"-"]},"atomic_p2p.utils.logging.formatters":{StdoutFormatter:[8,1,1,""]},"atomic_p2p.utils.logging.formatters.StdoutFormatter":{format:[8,2,1,""]},"atomic_p2p.utils.logging.handlers":{SocketHandler:[8,1,1,""],StreamHandler:[8,1,1,""]},"atomic_p2p.utils.logging.handlers.SocketHandler":{emit:[8,2,1,""],encrypt:[8,2,1,""]},"atomic_p2p.utils.manager":{ProcManager:[6,1,1,""],ThreadManager:[6,1,1,""]},"atomic_p2p.utils.manager.ProcManager":{is_start:[6,2,1,""],register_command:[6,2,1,""],register_handler:[6,2,1,""],run:[6,2,1,""],select_handler:[6,2,1,""],start:[6,2,1,""],stop:[6,2,1,""],unregister_command:[6,2,1,""],unregister_handler:[6,2,1,""]},"atomic_p2p.utils.manager.ThreadManager":{is_start:[6,2,1,""],register_command:[6,2,1,""],register_handler:[6,2,1,""],run:[6,2,1,""],select_handler:[6,2,1,""],start:[6,2,1,""],stop:[6,2,1,""],unregister_command:[6,2,1,""],unregister_handler:[6,2,1,""]},"atomic_p2p.utils.security":{create_self_signed_cert:[6,4,1,""],self_hash:[6,4,1,""]},atomic_p2p:{AtomicP2P:[0,1,1,""],local_monitor:[0,0,0,"-"],peer:[1,0,0,"-"],utils:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:staticmethod"},terms:{"byte":7,"class":[0,1,2,3,4,5,6,7,8],"default":[1,3],"enum":3,"export":[1,7],"float":3,"function":1,"int":[1,3,7],"new":[2,6],"return":[0,1,3,4,6,7,8],"static":7,"true":[1,6],"while":1,And:1,DNS:1,The:[0,1,4,6,7,8],__init__:[0,1,3,6,7],_data:7,_execut:6,_forwardref:1,_hash:[1,7],_on_command_recv:6,_type:7,aaa:[],abil:1,about:7,accept:7,ack:2,acknewmemberhandl:2,activ:[0,1,4,6],actual:[6,7,8],add:1,add_monitor_pass:8,add_peer_in_net:1,addit:1,addr:[0,4],address:[1,7],addtion:1,adjust:4,all:[1,3,4,7],ani:[0,1,4,6],annot:6,anyoth:1,append:[1,8],arg:[0,1,4,6],argument:[0,1,4,6],arrai:6,arrang:[1,6],assertionerror:1,atomicp2p:0,attribut:8,auto_join_net:[],auto_regist:6,auto_start:[],avai:1,avaiabl:1,base:[0,1,2,3,4,5,6,7,8],bbb:[],been:[1,6,7],befor:8,bind:1,block:1,bool:[1,6,7],broadcast:1,call:[1,6,8],callabl:[0,1,4,6],can:6,carri:8,caus:[1,6],cert:[0,1,6],cert_dir:6,cert_fil:6,cess:1,chang:1,change_n:1,check:[3,4,5],checkhandl:5,checkjoin:2,checkjoinhandl:2,checknet:[],child:6,clear:1,clone:7,close:1,cmd:[1,4,6],code:1,com:[],command:[0,11],command_recv:0,commun:[0,1,4,6],comput:8,conn:[2,3,4,5,7],connec:1,connect:1,connectlist:1,constructor:[0,1,4,6],contain:7,content:11,context:6,control:[1,6],convert:7,count:3,coupl:8,creat:[1,6],create_self_signed_cert:6,crt:6,current:[1,3],current_host:1,data:[0,7],datacard:6,debug:[1,6],decrypt:0,defin:6,del_peer_in_net:1,delai:[1,4],delet:1,deliv:3,descriptor:1,deseril:7,destin:1,detail:[3,4],determin:[7,8],dict:[1,3,7],dictionari:8,directli:0,directori:6,disconnect:2,disconnecthandl:2,dns_resolv:[0,11],dnsresolv:1,domain:1,don:6,dst:[1,7],dur:1,dure:3,each:[1,6],emit:8,empti:1,enc_data:0,encrypt:[0,8],entiti:[0,1],enumer:3,error:1,etc:3,event:8,everi:[1,4,7],except:[0,1,6,8],exist:[1,6],extens:0,fail:6,fals:[1,4,6,7],fetch:1,fianl:1,file:[0,1],first:1,flag:4,forc:6,format:[0,7,8],formatexcept:8,formatt:[0,6],formattim:8,forward:1,four:1,fqdn:1,from:[0,1,4,6,7],further:1,get:1,get_peer_info_by_host:1,getexternalip:[],getlogg:8,getmessag:8,give:1,given:1,global:1,googl:[],handl:[1,3],handler:[0,1,2,4,5,6],handler_broadcast_packet:1,handler_unicast_packet:1,hard:1,hash:[1,7],have:1,help:[1,4],helpcmd:[1,4],hide:7,host:[1,3,6,7],host_valid:6,how:[6,7],http:[],ident:1,implement:[6,8],includ:[3,7],index:10,info:1,inform:[7,8],init:[0,1,3,6,7],inner:7,instanc:1,intend:8,interact:7,invok:[0,1,4,6],is_peer_in_net:1,is_reject:7,is_ssl_socket_open:7,is_start:6,iter:1,its:[1,7],join:[1,2],joincmd:1,joinhandl:2,keep:[1,4],kei:[0,6,7],key_fil:6,keypair:6,keyword:[0,1,4,6],kwarg:[0,1,4,6,7],labl:1,last:3,last_update_t:3,leav:1,leavenet:1,leavenetcmd:1,level:8,like:0,link:1,list:[1,4,6],listcmd:[1,4],listen:0,local_monitor:11,local_monitor_pass:[],localmonitor:0,log:[0,1,6],logger:[1,6],logrecord:8,loop:1,loop_delai:1,loopdelai:[1,4,6],made:7,mai:[0,1,4,6],main:[],maintain:[1,7],maintain_data:7,maintain_secret:7,make:1,manag:[0,1,4,11],manuadl:4,manual:4,manualcmd:4,max_no_response_count:4,mean:[6,7],member:2,memeb:2,messag:[1,2,8],messagehandl:2,method:[0,1,4,6],miss:4,modul:[10,11],monitor:[0,1,3],more:[1,4,6],most:[1,6],msg:[0,1],msg_arr:[1,4,6],multiprocess:6,must:[1,6],myapp:6,name:[0,1,3,8],nameserv:1,namserv:1,need:[1,7],net:[0,1],new_tcp_long_conn:1,newmemberhandl:2,next:1,no_resp:3,no_response_count:3,non:1,none:[0,1,3,4,6,7,8],notimplementederror:8,ns1:1,ns2:1,ns3:1,obj:7,object:[0,1,3,4,6,7],occur:1,occurr:1,on_recv:7,on_recv_pkt:[2,4,5,7],on_recv_reject_pkt:[5,7],on_send:7,on_send_pkt:[2,5,7],on_send_reject_pkt:7,onc:[1,6],one:1,onli:1,onprocess:[1,4],oper:8,operand:8,option:[],out:8,output:4,overrid:[0,1,4,6],overridden:6,packag:11,packet:[0,1,3,6],page:10,param:0,paramet:[1,3,6,7],pars:[1,7],pass:[0,1,4,6],password:[0,8],path:[0,1,6],paus:4,pausecmd:4,payload:7,peer:[0,7,11],peer_info:[0,1,2],peer_pool:1,peer_statu:[0,1],peerinfo:[1,3],peermanag:1,peerstatu:3,pem:0,pend:[1,3],pend_packet:1,pend_socket:1,pend_socket_to_rm:1,per:[1,6],period:[1,4],periodcmd:4,pip:[],pkt:[1,2,4,5,7],pkt_handler:[1,6],pkt_type:[1,2,4,5,6,7],point:0,pool:1,port:[0,1,4],precheck:6,preparatori:8,print:6,prioriti:1,pro:1,proce:7,process:[1,6],procmanag:6,program:1,prompt:[1,4],proper:1,ptr:1,put:1,queri:1,queue:1,rais:[1,6,8],raw_data:[0,1,7,8],readi:1,reciev:[1,7],reciv:1,record:[1,8],recv:7,redirect_to_host:7,regist:6,register_command:6,register_handl:6,registercommand:0,registerhandl:0,reject:7,reject_data:7,remov:[1,6],removemonitorlist:4,repres:[0,1,4,6,7],request:1,reset:4,resetcmd:4,resolv:1,respect:[0,1,4,6],respons:[1,3,7],result:[1,6],revers:1,role:[0,1,3],run:[0,1,4,6],runtimeerror:[1,6],safer:1,same:[0,1,6],search:10,sec:1,second:[1,4],secur:[0,7,11],select_handl:[1,4,6],self:[1,6],self_hash:6,send:[1,4,7],sendcmd:1,sender:7,separ:[1,6],sepecif:1,sequenti:[0,1,4,6],seril:7,server:0,server_info:1,servic:[0,1],set:6,set_reject:7,should:[0,1],show:[1,4],sign:6,sinc:3,skip:1,sock:[1,7],socket:1,sockethandl:8,sourc:7,specif:[1,4],specifi:[1,8],split:6,src:[2,5,7],srv:1,srv_fqdn:1,ssing:7,ssl:1,sslsocket:[1,7],standard:[0,1,4,6],start:[0,1,6],statu:[3,4],status_typ:3,statustyp:3,stdoutformatt:8,step:8,stop:[0,1,6],str:[0,1,4,6,7],stream:8,streamhandl:8,string:[7,8],sub:[0,6],subclass:[0,1,4,6,8],submodul:11,subpackag:11,success:[1,6],sync_from_dn:1,take:8,taken:[0,1,4,6],target:[0,1,2,4,5,6,7],tcp:1,teract:3,termin:1,text:8,than:[1,6],them:6,thi:[0,1,3,4,6,7,8],thread:[0,1,4,6],threadmanag:[0,1,4,6],time:[3,8],timestamp:3,tion:1,to_dict:7,todict:3,toggl:4,trigger:6,tupl:[1,6,7],type:[0,1,3,4,6,7],unicast:1,union:1,uniqu:[1,6,7],unknown:3,unregist:6,unregister_command:6,unregister_handl:6,updat:[1,3],url:[],usag:[1,4],use:1,used:[1,8],uses:8,usestim:8,using:8,utf:7,util:[0,1,2,4,5,11],valid_ipv4_format:7,valid_ipv6_format:7,valueerror:1,variabl:1,varialb:1,verbos:4,verbosecmd:4,version:8,want:1,weather:6,weight:1,what:7,whatev:8,when:[1,3,6,7],where:7,which:[1,7,8],who:7,whole:1,whould:1,work:6,would:1,wrap:[1,7],wrape:1,write:6,www:[],yield:8,you:[0,1,4,6]},titles:["atomic_p2p package","atomic_p2p.peer package","atomic_p2p.peer.communication package","atomic_p2p.peer.entity package","atomic_p2p.peer.monitor package","atomic_p2p.peer.monitor.communication package","atomic_p2p.utils package","atomic_p2p.utils.communication package","atomic_p2p.utils.logging package","dns_resolver_test module","Welcome to AtomicP2P\u2019s documentation!","atomic_p2p","run module"],titleterms:{atomic_p2p:[0,1,2,3,4,5,6,7,8,11],atomicp2p:10,command:[1,4,6],commun:[2,5,7],content:[0,1,2,3,4,5,6,7,8],dns_resolv:1,dns_resolver_test:9,document:10,entiti:3,formatt:8,handler:[7,8],indic:10,instal:[],local_monitor:0,log:8,manag:6,modul:[0,1,2,3,4,5,6,7,8,9,12],monitor:[4,5],msg:2,navig:[],net:2,packag:[0,1,2,3,4,5,6,7,8],packet:7,peer:[1,2,3,4,5],peer_info:3,peer_statu:3,run:12,secur:6,submodul:[0,1,2,3,4,6,7,8],subpackag:[0,1,4,6],tabl:10,util:[6,7,8],welcom:10}})