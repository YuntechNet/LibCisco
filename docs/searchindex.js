Search.setIndex({docnames:["atomic_p2p","atomic_p2p.abc","atomic_p2p.communication","atomic_p2p.logging","atomic_p2p.manager","atomic_p2p.mixin","atomic_p2p.mixin.authenticator","atomic_p2p.mixin.topology","atomic_p2p.mixin.topology.lan","atomic_p2p.mixin.topology.lan.handler","atomic_p2p.peer","atomic_p2p.peer.entity","atomic_p2p.peer.monitor","atomic_p2p.utils","index","modules"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["atomic_p2p.rst","atomic_p2p.abc.rst","atomic_p2p.communication.rst","atomic_p2p.logging.rst","atomic_p2p.manager.rst","atomic_p2p.mixin.rst","atomic_p2p.mixin.authenticator.rst","atomic_p2p.mixin.topology.rst","atomic_p2p.mixin.topology.lan.rst","atomic_p2p.mixin.topology.lan.handler.rst","atomic_p2p.peer.rst","atomic_p2p.peer.entity.rst","atomic_p2p.peer.monitor.rst","atomic_p2p.utils.rst","index.rst","modules.rst"],objects:{"":{atomic_p2p:[0,0,0,"-"]},"atomic_p2p.AtomicP2P":{__init__:[0,2,1,""],start:[0,2,1,""],stop:[0,2,1,""]},"atomic_p2p.abc":{AuthenticatorABC:[1,1,1,""],TopologyABC:[1,1,1,""],authenticator:[1,0,0,"-"],topology:[1,0,0,"-"]},"atomic_p2p.abc.AuthenticatorABC":{_authenticate_packet:[1,2,1,""],_on_fail:[1,2,1,""],_on_pass:[1,2,1,""]},"atomic_p2p.abc.TopologyABC":{add_peer_in_net:[1,2,1,""],del_peer_in_net:[1,2,1,""],get_peer_info_by_conn:[1,2,1,""],get_peer_info_by_host:[1,2,1,""],handler_broadcast_packet:[1,2,1,""],handler_unicast_packet:[1,2,1,""],is_peer_in_net:[1,2,1,""],join_net:[1,2,1,""],join_net_by_DNS:[1,2,1,""],leave_net:[1,2,1,""],on_packet_to_route:[1,2,1,""],topology_register_handler:[1,2,1,""]},"atomic_p2p.abc.authenticator":{AuthenticatorABC:[1,1,1,""]},"atomic_p2p.abc.authenticator.AuthenticatorABC":{_authenticate_packet:[1,2,1,""],_on_fail:[1,2,1,""],_on_pass:[1,2,1,""]},"atomic_p2p.abc.topology":{TopologyABC:[1,1,1,""]},"atomic_p2p.abc.topology.TopologyABC":{add_peer_in_net:[1,2,1,""],del_peer_in_net:[1,2,1,""],get_peer_info_by_conn:[1,2,1,""],get_peer_info_by_host:[1,2,1,""],handler_broadcast_packet:[1,2,1,""],handler_unicast_packet:[1,2,1,""],is_peer_in_net:[1,2,1,""],join_net:[1,2,1,""],join_net_by_DNS:[1,2,1,""],leave_net:[1,2,1,""],on_packet_to_route:[1,2,1,""],topology_register_handler:[1,2,1,""]},"atomic_p2p.communication":{Command:[2,1,1,""],Handler:[2,1,1,""],Packet:[2,1,1,""],command:[2,0,0,"-"],handler:[2,0,0,"-"],packet:[2,0,0,"-"],valid_ipv4_format:[2,5,1,""],valid_ipv6_format:[2,5,1,""]},"atomic_p2p.communication.Command":{__init__:[2,2,1,""],_execute:[2,2,1,""],_on_command_recv:[2,2,1,""]},"atomic_p2p.communication.Handler":{__init__:[2,2,1,""],on_recv:[2,2,1,""],on_recv_pkt:[2,2,1,""],on_recv_reject_pkt:[2,2,1,""],on_send:[2,2,1,""],on_send_pkt:[2,2,1,""],on_send_reject_pkt:[2,2,1,""],peer:[2,3,1,""],pkt_type:[2,3,1,""],post_send:[2,2,1,""],pre_send:[2,2,1,""]},"atomic_p2p.communication.Packet":{"export":[2,3,1,""],__init__:[2,2,1,""],clone:[2,2,1,""],data:[2,3,1,""],deserilize:[2,4,1,""],dst:[2,3,1,""],is_reject:[2,2,1,""],program_hash:[2,3,1,""],redirect_to_host:[2,2,1,""],serilize:[2,4,1,""],set_reject:[2,2,1,""],src:[2,3,1,""],to_dict:[2,2,1,""]},"atomic_p2p.communication.command":{Command:[2,1,1,""]},"atomic_p2p.communication.command.Command":{__init__:[2,2,1,""],_execute:[2,2,1,""],_on_command_recv:[2,2,1,""]},"atomic_p2p.communication.handler":{Handler:[2,1,1,""]},"atomic_p2p.communication.handler.Handler":{__init__:[2,2,1,""],on_recv:[2,2,1,""],on_recv_pkt:[2,2,1,""],on_recv_reject_pkt:[2,2,1,""],on_send:[2,2,1,""],on_send_pkt:[2,2,1,""],on_send_reject_pkt:[2,2,1,""],peer:[2,3,1,""],pkt_type:[2,3,1,""],post_send:[2,2,1,""],pre_send:[2,2,1,""]},"atomic_p2p.communication.packet":{Packet:[2,1,1,""]},"atomic_p2p.communication.packet.Packet":{"export":[2,3,1,""],__init__:[2,2,1,""],clone:[2,2,1,""],data:[2,3,1,""],deserilize:[2,4,1,""],dst:[2,3,1,""],is_reject:[2,2,1,""],program_hash:[2,3,1,""],redirect_to_host:[2,2,1,""],serilize:[2,4,1,""],set_reject:[2,2,1,""],src:[2,3,1,""],to_dict:[2,2,1,""]},"atomic_p2p.local_monitor":{LocalMonitor:[0,1,1,""]},"atomic_p2p.local_monitor.LocalMonitor":{command_recv:[0,2,1,""],decrypt:[0,2,1,""],encrypt:[0,2,1,""],new_cipher:[0,2,1,""],registerCommand:[0,2,1,""],registerHandler:[0,2,1,""],run:[0,2,1,""],stop:[0,2,1,""]},"atomic_p2p.logging":{formatters:[3,0,0,"-"],getLogger:[3,5,1,""],handlers:[3,0,0,"-"]},"atomic_p2p.logging.formatters":{StdoutFormatter:[3,1,1,""]},"atomic_p2p.logging.formatters.StdoutFormatter":{format:[3,2,1,""]},"atomic_p2p.logging.handlers":{SocketHandler:[3,1,1,""],StreamHandler:[3,1,1,""]},"atomic_p2p.logging.handlers.SocketHandler":{emit:[3,2,1,""],encrypt:[3,2,1,""],new_cipher:[3,2,1,""]},"atomic_p2p.manager":{ProcManager:[4,1,1,""],ThreadManager:[4,1,1,""],process:[4,0,0,"-"],thread:[4,0,0,"-"]},"atomic_p2p.manager.ProcManager":{is_start:[4,2,1,""],run:[4,2,1,""],start:[4,2,1,""],stop:[4,2,1,""]},"atomic_p2p.manager.ThreadManager":{is_start:[4,2,1,""],run:[4,2,1,""],start:[4,2,1,""],stop:[4,2,1,""]},"atomic_p2p.manager.process":{ProcManager:[4,1,1,""]},"atomic_p2p.manager.process.ProcManager":{is_start:[4,2,1,""],run:[4,2,1,""],start:[4,2,1,""],stop:[4,2,1,""]},"atomic_p2p.manager.thread":{ThreadManager:[4,1,1,""]},"atomic_p2p.manager.thread.ThreadManager":{is_start:[4,2,1,""],run:[4,2,1,""],start:[4,2,1,""],stop:[4,2,1,""]},"atomic_p2p.mixin":{CommandableMixin:[5,1,1,""],DefaultAuthenticatorMixin:[5,1,1,""],HandleableMixin:[5,1,1,""],LanTopologyMixin:[5,1,1,""],authenticator:[6,0,0,"-"],commandable:[5,0,0,"-"],handleable:[5,0,0,"-"],topology:[7,0,0,"-"]},"atomic_p2p.mixin.CommandableMixin":{commands:[5,3,1,""],onProcess:[5,2,1,""],register_command:[5,2,1,""],unregister_command:[5,2,1,""]},"atomic_p2p.mixin.HandleableMixin":{pkt_handlers:[5,3,1,""],register_handler:[5,2,1,""],select_handler:[5,2,1,""],unregister_handler:[5,2,1,""]},"atomic_p2p.mixin.LanTopologyMixin":{add_peer_in_net:[5,2,1,""],del_peer_in_net:[5,2,1,""],get_peer_info_by_conn:[5,2,1,""],get_peer_info_by_host:[5,2,1,""],handler_broadcast_packet:[5,2,1,""],handler_unicast_packet:[5,2,1,""],is_peer_in_net:[5,2,1,""],join_net:[5,2,1,""],join_net_by_DNS:[5,2,1,""],leave_net:[5,2,1,""],on_packet_to_route:[5,2,1,""],topology_register_handler:[5,2,1,""]},"atomic_p2p.mixin.authenticator":{DefaultAuthenticatorMixin:[6,1,1,""],default_authenticator:[6,0,0,"-"]},"atomic_p2p.mixin.authenticator.default_authenticator":{DefaultAuthenticatorMixin:[6,1,1,""]},"atomic_p2p.mixin.commandable":{CommandableMixin:[5,1,1,""]},"atomic_p2p.mixin.commandable.CommandableMixin":{commands:[5,3,1,""],onProcess:[5,2,1,""],register_command:[5,2,1,""],unregister_command:[5,2,1,""]},"atomic_p2p.mixin.handleable":{HandleableMixin:[5,1,1,""]},"atomic_p2p.mixin.handleable.HandleableMixin":{pkt_handlers:[5,3,1,""],register_handler:[5,2,1,""],select_handler:[5,2,1,""],unregister_handler:[5,2,1,""]},"atomic_p2p.mixin.topology":{LanTopologyMixin:[7,1,1,""],lan:[8,0,0,"-"]},"atomic_p2p.mixin.topology.LanTopologyMixin":{add_peer_in_net:[7,2,1,""],del_peer_in_net:[7,2,1,""],get_peer_info_by_conn:[7,2,1,""],get_peer_info_by_host:[7,2,1,""],handler_broadcast_packet:[7,2,1,""],handler_unicast_packet:[7,2,1,""],is_peer_in_net:[7,2,1,""],join_net:[7,2,1,""],join_net_by_DNS:[7,2,1,""],leave_net:[7,2,1,""],on_packet_to_route:[7,2,1,""],topology_register_handler:[7,2,1,""]},"atomic_p2p.mixin.topology.lan":{LanTopologyMixin:[8,1,1,""],handler:[9,0,0,"-"]},"atomic_p2p.mixin.topology.lan.LanTopologyMixin":{add_peer_in_net:[8,2,1,""],del_peer_in_net:[8,2,1,""],get_peer_info_by_conn:[8,2,1,""],get_peer_info_by_host:[8,2,1,""],handler_broadcast_packet:[8,2,1,""],handler_unicast_packet:[8,2,1,""],is_peer_in_net:[8,2,1,""],join_net:[8,2,1,""],join_net_by_DNS:[8,2,1,""],leave_net:[8,2,1,""],on_packet_to_route:[8,2,1,""],topology_register_handler:[8,2,1,""]},"atomic_p2p.mixin.topology.lan.handler":{AckNewMemberHandler:[9,1,1,""],CheckJoinHandler:[9,1,1,""],DisconnectHandler:[9,1,1,""],JoinHandler:[9,1,1,""],NewMemberHandler:[9,1,1,""],ack_new_member:[9,0,0,"-"],check_join:[9,0,0,"-"],disconnect:[9,0,0,"-"],join:[9,0,0,"-"],new_member:[9,0,0,"-"]},"atomic_p2p.mixin.topology.lan.handler.AckNewMemberHandler":{on_recv_pkt:[9,2,1,""],on_send_pkt:[9,2,1,""],pkt_type:[9,3,1,""]},"atomic_p2p.mixin.topology.lan.handler.CheckJoinHandler":{on_recv_pkt:[9,2,1,""],on_send_pkt:[9,2,1,""],pkt_type:[9,3,1,""]},"atomic_p2p.mixin.topology.lan.handler.DisconnectHandler":{on_recv_pkt:[9,2,1,""],on_send_pkt:[9,2,1,""],pkt_type:[9,3,1,""],post_send:[9,2,1,""]},"atomic_p2p.mixin.topology.lan.handler.JoinHandler":{on_recv_pkt:[9,2,1,""],on_send_pkt:[9,2,1,""],pkt_type:[9,3,1,""],post_send:[9,2,1,""]},"atomic_p2p.mixin.topology.lan.handler.NewMemberHandler":{on_recv_pkt:[9,2,1,""],on_send_pkt:[9,2,1,""],pkt_type:[9,3,1,""]},"atomic_p2p.mixin.topology.lan.handler.ack_new_member":{AckNewMemberHandler:[9,1,1,""]},"atomic_p2p.mixin.topology.lan.handler.ack_new_member.AckNewMemberHandler":{on_recv_pkt:[9,2,1,""],on_send_pkt:[9,2,1,""],pkt_type:[9,3,1,""]},"atomic_p2p.mixin.topology.lan.handler.check_join":{CheckJoinHandler:[9,1,1,""]},"atomic_p2p.mixin.topology.lan.handler.check_join.CheckJoinHandler":{on_recv_pkt:[9,2,1,""],on_send_pkt:[9,2,1,""],pkt_type:[9,3,1,""]},"atomic_p2p.mixin.topology.lan.handler.disconnect":{DisconnectHandler:[9,1,1,""]},"atomic_p2p.mixin.topology.lan.handler.disconnect.DisconnectHandler":{on_recv_pkt:[9,2,1,""],on_send_pkt:[9,2,1,""],pkt_type:[9,3,1,""],post_send:[9,2,1,""]},"atomic_p2p.mixin.topology.lan.handler.join":{JoinHandler:[9,1,1,""]},"atomic_p2p.mixin.topology.lan.handler.join.JoinHandler":{on_recv_pkt:[9,2,1,""],on_send_pkt:[9,2,1,""],pkt_type:[9,3,1,""],post_send:[9,2,1,""]},"atomic_p2p.mixin.topology.lan.handler.new_member":{NewMemberHandler:[9,1,1,""]},"atomic_p2p.mixin.topology.lan.handler.new_member.NewMemberHandler":{on_recv_pkt:[9,2,1,""],on_send_pkt:[9,2,1,""],pkt_type:[9,3,1,""]},"atomic_p2p.peer":{Peer:[10,1,1,""],ProcessPeer:[10,1,1,""],ThreadPeer:[10,1,1,""],command:[10,0,0,"-"],communication:[10,0,0,"-"],entity:[11,0,0,"-"],monitor:[12,0,0,"-"],peer:[10,0,0,"-"],process_peer:[10,0,0,"-"],thread_peer:[10,0,0,"-"]},"atomic_p2p.peer.Peer":{_Peer__on_accept:[10,2,1,""],_Peer__on_handle:[10,2,1,""],_Peer__on_recv:[10,2,1,""],_Peer__on_send:[10,2,1,""],__init__:[10,2,1,""],_loop:[10,2,1,""],_on_packet:[10,2,1,""],connectlist:[10,3,1,""],loop:[10,2,1,""],loop_start:[10,2,1,""],loop_stop:[10,2,1,""],loop_stop_post:[10,2,1,""],new_tcp_long_conn:[10,2,1,""],peer_pool:[10,3,1,""],pend_packet:[10,2,1,""],pkt_handlers:[10,3,1,""],program_hash:[10,3,1,""],register_socket:[10,2,1,""],send_queue:[10,3,1,""],server_info:[10,3,1,""],unregister_socket:[10,2,1,""]},"atomic_p2p.peer.ProcessPeer":{is_start:[10,2,1,""],run:[10,2,1,""],start:[10,2,1,""],stop:[10,2,1,""]},"atomic_p2p.peer.ThreadPeer":{is_start:[10,2,1,""],run:[10,2,1,""],start:[10,2,1,""],stop:[10,2,1,""]},"atomic_p2p.peer.command":{HelpCmd:[10,1,1,""],JoinCmd:[10,1,1,""],LeaveNetCmd:[10,1,1,""],ListCmd:[10,1,1,""],SendCmd:[10,1,1,""]},"atomic_p2p.peer.communication":{MessageHandler:[10,1,1,""]},"atomic_p2p.peer.communication.MessageHandler":{on_recv_pkt:[10,2,1,""],on_send_pkt:[10,2,1,""],pkt_type:[10,3,1,""]},"atomic_p2p.peer.entity":{PeerInfo:[11,1,1,""],PeerStatus:[11,1,1,""],StatusType:[11,1,1,""],peer_info:[11,0,0,"-"],peer_status:[11,0,0,"-"]},"atomic_p2p.peer.entity.PeerStatus":{__init__:[11,2,1,""],last_update_ts:[11,3,1,""],no_response_count:[11,3,1,""],status:[11,3,1,""],toDict:[11,2,1,""],update:[11,2,1,""]},"atomic_p2p.peer.entity.StatusType":{NO_RESP:[11,3,1,""],PENDING:[11,3,1,""],UNKNOWN:[11,3,1,""],UPDATED:[11,3,1,""]},"atomic_p2p.peer.entity.peer_info":{PeerInfo:[11,1,1,""]},"atomic_p2p.peer.entity.peer_status":{PeerStatus:[11,1,1,""],StatusType:[11,1,1,""]},"atomic_p2p.peer.entity.peer_status.PeerStatus":{__init__:[11,2,1,""],last_update_ts:[11,3,1,""],no_response_count:[11,3,1,""],status:[11,3,1,""],toDict:[11,2,1,""],update:[11,2,1,""]},"atomic_p2p.peer.entity.peer_status.StatusType":{NO_RESP:[11,3,1,""],PENDING:[11,3,1,""],UNKNOWN:[11,3,1,""],UPDATED:[11,3,1,""]},"atomic_p2p.peer.monitor":{Monitor:[12,1,1,""],command:[12,0,0,"-"],communication:[12,0,0,"-"]},"atomic_p2p.peer.monitor.Monitor":{is_start:[12,2,1,""],on_recv_pkt:[12,2,1,""],peer_status_update_by_host:[12,2,1,""],removeMonitorlist:[12,2,1,""],run:[12,2,1,""],start:[12,2,1,""],stop:[12,2,1,""]},"atomic_p2p.peer.monitor.command":{HelpCmd:[12,1,1,""],ListCmd:[12,1,1,""],ManualCmd:[12,1,1,""],PauseCmd:[12,1,1,""],PeriodCmd:[12,1,1,""],ResetCmd:[12,1,1,""],VerboseCmd:[12,1,1,""]},"atomic_p2p.peer.monitor.communication":{CheckHandler:[12,1,1,""]},"atomic_p2p.peer.monitor.communication.CheckHandler":{on_recv_pkt:[12,2,1,""],on_recv_reject_pkt:[12,2,1,""],on_send_pkt:[12,2,1,""],pkt_type:[12,3,1,""]},"atomic_p2p.peer.peer":{Peer:[10,1,1,""]},"atomic_p2p.peer.peer.Peer":{_Peer__on_accept:[10,2,1,""],_Peer__on_handle:[10,2,1,""],_Peer__on_recv:[10,2,1,""],_Peer__on_send:[10,2,1,""],__init__:[10,2,1,""],_loop:[10,2,1,""],_on_packet:[10,2,1,""],connectlist:[10,3,1,""],loop:[10,2,1,""],loop_start:[10,2,1,""],loop_stop:[10,2,1,""],loop_stop_post:[10,2,1,""],new_tcp_long_conn:[10,2,1,""],peer_pool:[10,3,1,""],pend_packet:[10,2,1,""],pkt_handlers:[10,3,1,""],program_hash:[10,3,1,""],register_socket:[10,2,1,""],send_queue:[10,3,1,""],server_info:[10,3,1,""],unregister_socket:[10,2,1,""]},"atomic_p2p.peer.process_peer":{ProcessPeer:[10,1,1,""]},"atomic_p2p.peer.process_peer.ProcessPeer":{is_start:[10,2,1,""],run:[10,2,1,""],start:[10,2,1,""],stop:[10,2,1,""]},"atomic_p2p.peer.thread_peer":{ThreadPeer:[10,1,1,""]},"atomic_p2p.peer.thread_peer.ThreadPeer":{is_start:[10,2,1,""],run:[10,2,1,""],start:[10,2,1,""],stop:[10,2,1,""]},"atomic_p2p.utils":{DNSResolver:[13,1,1,""],create_self_signed_cert:[13,5,1,""],dns_resolver:[13,0,0,"-"],host_valid:[13,5,1,""],security:[13,0,0,"-"],self_hash:[13,5,1,""]},"atomic_p2p.utils.DNSResolver":{__init__:[13,2,1,""],change_ns:[13,2,1,""],forward:[13,2,1,""],reverse:[13,2,1,""],srv:[13,2,1,""],sync_from_DNS:[13,2,1,""]},"atomic_p2p.utils.dns_resolver":{DNSResolver:[13,1,1,""]},"atomic_p2p.utils.dns_resolver.DNSResolver":{__init__:[13,2,1,""],change_ns:[13,2,1,""],forward:[13,2,1,""],reverse:[13,2,1,""],srv:[13,2,1,""],sync_from_DNS:[13,2,1,""]},"atomic_p2p.utils.security":{create_self_signed_cert:[13,5,1,""],self_hash:[13,5,1,""]},atomic_p2p:{AtomicP2P:[0,1,1,""],abc:[1,0,0,"-"],communication:[2,0,0,"-"],local_monitor:[0,0,0,"-"],logging:[3,0,0,"-"],manager:[4,0,0,"-"],mixin:[5,0,0,"-"],peer:[10,0,0,"-"],utils:[13,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","staticmethod","Python static method"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:staticmethod","5":"py:function"},terms:{"1st":10,"2th":10,"3rd":10,"abstract":1,"byte":2,"case":5,"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"default":[11,13],"enum":11,"export":[2,5,7,8],"float":11,"function":[1,5,7,8,13],"import":[5,7,8],"int":[2,5,7,8,10,11],"new":[9,10,13],"return":[1,2,3,4,5,7,8,10,11,12,13],"static":2,"true":[5,7,8],"while":[5,7,8],And:10,DNS:[5,7,8,10,13],The:[0,1,2,3,4,5,6,7,8,10,12,13],__init__:[0,2,10,11,13],_authenticate_packet:1,_data:2,_execut:2,_forwardref:[1,5,7,8],_loop:10,_on_command_recv:2,_on_fail:1,_on_packet:[5,6,10],_on_pass:1,_peer__on_accept:10,_peer__on_handl:10,_peer__on_recv:10,_peer__on_send:10,_type:[1,2,5,7,8],abc:[0,5,6,7,8,15],abil:[5,6,10],about:2,absctract:1,accept:[2,10],ack:9,ack_new_memb:[0,5,7,8],acknewmemberhandl:9,activ:[0,4,10,12],actual:[1,2,3],add:[5,7,8],add_monitor_pass:3,add_peer_in_net:[1,5,7,8],addit:10,addr:[0,12],address:[2,5,7,8,10,13],addtion:[5,7,8],adjust:12,after:[1,5,7,8],all:[2,10,11,12,13],allow:[5,6],also:5,ani:[0,2,4,5,7,8,10,12,13],annot:2,anyhandleryoune:[1,5,7,8],anyoth:[5,7,8],anyth:5,append:3,applic:10,arg:[0,4,5,7,8,10,12],argument:[0,2,4,5,7,8,10,12],arrai:2,arrang:[4,10,12],assertionerror:[5,7,8,10],atomicp2p:0,attack:[5,6],attribut:3,authent:[0,5,7,8,10,15],authenticatorabc:[1,5,6,7,8],authenticatormixin:10,auto_regist:10,avai:10,avaiabl:13,base:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],been:[2,5,10,13],befor:3,bind:10,block:10,bool:[1,2,4,5,7,8,10,12],broadcast:[5,7,8,10],call:[1,3,4,5,7,8,10,12],callabl:[0,4,10,12],can:[4,5,6,7,8,10],carri:3,caus:[2,10],cert:[0,10,13],cert_dir:13,cert_fil:13,cess:13,chang:13,change_n:13,check:[11,12],check_join:[0,5,7,8],checkhandl:12,checkjoin:9,checkjoinhandl:9,child:[4,10],circular:5,clear:10,clone:2,close:10,cmd:[2,5,10,12],code:13,command:[0,15],command_recv:0,commandablemixin:[5,10,12],commun:[0,5,9,15],comput:3,conn:[1,2,5,7,8,9,10,11,12],connec:10,connect:10,connectlist:10,constructor:[0,4,10,12],contain:[2,5,6],content:15,context:[4,10],control:[1,4,10,12],convert:2,count:11,coupl:3,cowork:1,creat:[10,13],create_self_signed_cert:13,crt:13,current:[5,7,8,10,11,13],current_host:13,data:[0,2,10],datacard:13,debug:[0,4,10,12],decid:[5,6,10],decrypt:0,default_authent:[0,5,10],defaultauthenticatormixin:[5,6,10],defin:2,del_peer_in_net:[1,5,7,8],delai:12,delet:[5,7,8],deliv:11,deseril:2,destin:[5,7,8,10],detail:[11,12],determin:[2,3],dict:[2,5,10,11],dictionari:3,directli:0,directori:13,disconnect:[0,5,7,8],disconnecthandl:9,dns_resolv:[0,15],dnsresolv:13,doesn:10,domain:[1,5,7,8,10,13],don:13,dst:[2,10],dur:13,dure:11,each:[1,2,5,7,8,13],element:[1,5,7,8],els:[1,5,7,8],emit:3,empti:13,enc_data:0,encrypt:[0,3],entiti:[0,10],enumer:11,error:13,essenti:[1,5,7,8],etc:11,event:[3,10],everi:[2,10,12,13],everyth:[5,6],examin:[1,10],except:[0,2,3,10,13],execut:1,exist:[5,7,8,13],extens:0,fail:[1,5],fals:[2,5,7,8,10,12],fetch:13,fianl:13,field:[5,6],file:[0,5,6,10],first:[5,7,8],flag:12,flow:1,forc:5,format:[0,1,2,3,5,7,8],formatexcept:3,formatt:[0,15],formattim:3,forward:13,found:5,four:13,fqdn:13,from:[0,1,2,4,5,7,8,10,12,13],further:10,get:[1,5,7,8],get_peer_info_by_conn:[1,5,7,8],get_peer_info_by_host:[1,5,7,8],getlogg:[3,5,7,8],getmessag:3,give:13,given:[1,5,7,8,10,13],global:13,handl:[5,10,11],handleabl:[0,10,12,15],handleablemixin:[1,5,7,8,10,12],handler:[0,1,5,7,8,10,12,15],handler_broadcast_packet:[1,5,7,8],handler_unicast_packet:[1,5,7,8],hard:13,hash:[2,5,6,10],have:10,help:[10,12],helpcmd:[10,12],hide:2,higer:[5,6],higher:[5,6,10],host:[1,2,5,7,8,10,11,12,13],host_valid:13,how:2,ident:[5,7,8],implement:[1,2,3],includ:[2,11],index:14,infinit:10,info:[1,5,7,8,10,13],inform:[2,3],inherit:[5,6,10],init:[0,2,10,11,13],inner:2,insid:[1,5,7,8,10],installing_handl:[1,5,7,8],instanc:[5,7,8],intend:3,interact:[2,5],invok:[0,4,10,12],is_peer_in_net:[1,5,7,8],is_reject:2,is_start:[4,10,12],iter:5,its:[2,10],join:[0,5,7,8,10],join_net:[1,5,7,8],join_net_by_dn:[1,5,7,8],joincmd:10,joinhandl:9,keep:[5,6,12,13],kei:[0,2,3,5,13],key_fil:13,keypair:13,keyword:[0,4,10,12],known:[5,7,8],kwarg:[0,1,2,4,5,7,8,10,12],labl:10,lan:[0,5,7,10],lantopologymixin:[5,7,8,10],last:[10,11],last_update_t:11,layer:[5,6,10],leav:10,leave_net:[1,5,7,8],leavenet:10,leavenetcmd:10,level:[3,5,6],like:[0,1,5,7,8],link:10,list:[2,5,7,8,10,12,13],listcmd:[10,12],listen:0,local_monitor:15,localmonitor:0,log:[0,5,7,8,10,15],logger:[0,1,4,5,6,7,8,10,12],logic:1,logrecord:3,loop:10,loop_delai:[10,12],loop_start:10,loop_stop:10,loop_stop_post:10,loopdelai:[4,13],made:2,mai:[0,4,10,12],maintain:[2,10,13],maintain_data:2,maintain_secret:2,make:[1,5,7,8],man:[5,6],manag:[0,15],manuadl:12,manual:12,manualcmd:12,mask:10,match:5,max_no_response_count:12,mean:[2,5,10],member:9,memeb:9,messag:[3,10],messagehandl:10,method:[0,1,4,5,6,7,8,10,12],middl:[5,6],miss:12,mixin:[0,10,12,15],modul:[14,15],monitor:[0,10,11],more:[4,10,12],most:[4,10,12],msg:10,msg_arr:[2,5],multipl:[5,7,8],multiprocess:[4,10],must:[4,10,12],myapp:13,name:[0,3,5,10,11],nameserv:[10,13],namserv:13,need:[2,5,7,8,10],net:[5,7,8,10,13],new_ciph:[0,3],new_memb:[0,5,7,8],new_tcp_long_conn:10,newmemberhandl:9,no_resp:11,no_response_count:11,non:10,none:[1,2,3,4,5,7,8,10,11,12,13],notic:[1,5,7,8],notimplementederror:3,ns1:10,ns2:10,ns3:10,obj:2,object:[0,1,2,4,5,7,8,10,11,12,13],occur:13,occurr:13,on_packet_to_rout:[1,5,7,8],on_recv:[1,2,5,7,8],on_recv_pkt:[2,9,10,12],on_recv_reject_pkt:[2,12],on_send:2,on_send_pkt:[2,9,10,12],on_send_reject_pkt:2,onc:[4,10,12],one:[5,7,8],onli:[5,7,8],onprocess:5,oper:3,operand:3,option:[5,7,8],out:3,output:12,outsid:10,overrid:[0,4,5,10,12],overridden:[4,10],packag:15,packet:[0,1,5,6,7,8,10,11,15],page:14,param:0,paramet:[2,5,7,8,10,11,13],parent:5,pars:[2,13],pass:[0,1,4,5,7,8,10,12],password:[0,3],path:[0,10,13],paus:12,pausecmd:12,payload:2,peer:[0,1,2,5,6,7,8,9,13,15],peer_info:[0,1,5,7,8,9,10],peer_pool:[5,7,8,10],peer_statu:[0,10],peer_status_update_by_host:12,peerinfo:[5,7,8,10,11,13],peermanag:10,peerstatu:11,pem:0,pend:[5,7,8,10,11,12],pend_packet:[5,6,10],per:[4,10,12],period:[12,13],periodcmd:12,pkt:[1,2,5,7,8,9,10,12],pkt_handler:[5,10],pkt_type:[1,2,5,7,8,9,10,12],point:[0,5,7,8],pool:[5,7,8,13],port:[0,5,7,8,10,12,13],posit:[5,7,8],positon:[5,7,8],post_send:[2,9],pre_send:2,precheck:2,preparatori:3,prevent:[5,6],print:2,prioriti:13,pro:13,proce:2,process:[0,2,5,6,10,15],process_p:[0,15],processp:10,procmanag:4,program:[5,6,10],program_hash:[2,5,6,10],prompt:[10,12],proper:[5,7,8,10],provid:[5,6],ptr:13,put:[10,13],queri:[5,7,8,13],queue:[5,6,10],rais:[3,4,5,7,8,10,12],raw_data:[0,2,3,10],readi:10,reciev:[2,5,7,8,10],reciv:[5,7,8],recogn:[5,6],record:[3,5,7,8,13],recv:[2,10],redirect_to_host:2,regist:[1,5,7,8,10],register_command:5,register_handl:[1,5,7,8],register_socket:10,registercommand:0,registerhandl:0,reject:2,reject_data:2,remov:5,removemonitorlist:12,repres:[0,2,4,5,7,8,10,12],request:10,reset:12,resetcmd:12,resolv:[10,13],respect:[0,4,10,12],respons:[2,11,13],result:[2,13],revers:13,riabl:5,role:[0,5,7,8,10,11,13],run:[0,4,10,12],runtimeerror:[4,10,12],safe:[5,6],safer:[5,7,8],same:[0,4,10,12],schedul:[5,6],search:14,sec:13,second:[5,7,8,12],secur:[0,2,15],select:5,select_handl:[1,5,7,8],selector:10,self:[1,5,7,8,10,13],self_hash:13,send:[2,5,7,8,10,12,13],send_queu:10,sendcmd:10,sender:2,separ:[4,10,12],sepecif:10,sequenti:[0,4,10,12],seril:2,server:[0,5,7,8],server_info:10,servic:[0,13],set:5,set_reject:2,should:[0,1,5,6,7,8],show:[10,12],sign:13,sinc:11,singl:[5,7,8],skip:13,sock:[1,2,5,7,8,9,10],socket:[1,5,6,7,8,10],sockethandl:3,some:[5,6],sourc:2,specif:[5,7,8,10,12],specifi:[3,5,7,8,10],split:2,src:[1,2,5,7,8,9,10,12],srv:13,srv_fqdn:13,ssing:2,ssl:10,sslsocket:[2,10],standard:[0,4,10,12],start:[0,4,10,12],statement:1,statu:[11,12],status_typ:[11,12],statustyp:[11,12],stdoutformatt:3,step:3,stop:[0,4,10,12],str:[0,2,5,6,7,8,10,13],stream:3,streamhandl:3,string:[2,3],stroe:5,sub:[0,4,10],subclass:[0,2,3,4,10,12],submodul:[7,8,15],subpackag:15,success:[5,6,7,8],sync_from_dn:13,take:3,taken:[0,4,10,12],target:[0,2,4,5,7,8,9,10,12],tcp:10,teract:11,termin:10,text:3,than:[4,10,12],them:13,thi:[0,1,2,3,4,5,6,7,8,10,11,12,13],thread:[0,10,12,15],thread_peer:[0,15],threadmanag:[0,4],threadpeer:10,through:5,time:[3,11],timestamp:11,tion:10,to_dict:2,todict:11,toggl:12,topolog:[0,5,10,15],topology_register_handl:[1,5,7,8],topologyabc:[1,5,7,8],trigger:[2,10],tupl:[2,5,7,8,10,13],type:[1,2,4,5,7,8,10,11,12,13],unicast:[5,7,8],union:[1,5,7,8,13],uniqu:[2,5,7,8],unknown:[1,5,7,8,11],unregist:5,unregister_command:5,unregister_handl:5,unregister_socket:10,updat:[11,13],usag:[10,12],use:[5,7,8,10],used:[3,5,7,8],uses:3,usestim:3,using:3,usual:[5,6],utf:2,util:[0,5,7,8,15],valid:[5,7,8],valid_ipv4_format:2,valid_ipv6_format:2,valueerror:[5,7,8],variabl:[5,7,8,10,13],varialb:13,verbos:12,verbosecmd:12,version:3,waiter:10,want:10,weight:13,what:2,whatev:3,when:[1,2,5,6,10,11],where:2,whether:[5,10],which:[2,3,5,6,7,8,10],who:2,whole:[5,6,13],whould:10,work:2,would:13,wrap:[2,10,13],wrape:13,write:13,yet:[5,7,8],yield:3,you:[0,4,10,12]},titles:["atomic_p2p package","atomic_p2p.abc package","atomic_p2p.communication package","atomic_p2p.logging package","atomic_p2p.manager package","atomic_p2p.mixin package","atomic_p2p.mixin.authenticator package","atomic_p2p.mixin.topology package","atomic_p2p.mixin.topology.lan package","atomic_p2p.mixin.topology.lan.handler package","atomic_p2p.peer package","atomic_p2p.peer.entity package","atomic_p2p.peer.monitor package","atomic_p2p.utils package","Welcome to AtomicP2P\u2019s documentation!","atomic_p2p"],titleterms:{abc:1,ack_new_memb:9,atomic_p2p:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,15],atomicp2p:14,authent:[1,6],check_join:9,command:[2,5,10,12],commun:[2,10,12],content:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],default_authent:6,disconnect:9,dns_resolv:13,document:14,entiti:11,formatt:3,handleabl:5,handler:[2,3,9],indic:14,join:9,lan:[8,9],local_monitor:0,log:3,manag:4,mixin:[5,6,7,8,9],modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],monitor:12,new_memb:9,packag:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],packet:2,peer:[10,11,12],peer_info:11,peer_statu:11,process:4,process_p:10,secur:13,submodul:[0,1,2,3,4,5,6,9,10,11,12,13],subpackag:[0,5,7,8,10],tabl:14,thread:4,thread_peer:10,topolog:[1,7,8,9],util:13,welcom:14}})