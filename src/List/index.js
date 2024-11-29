import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function List(props){ //recebemos via propriedade

    //Estilização da FlatList do feed

     
    function carregaIcon(likeada){
        //função caso for true mostrar like senão sem like
       return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }

     //mostrar quantidade de likes
    function mostraLikes(likers){
        //função se likers for igual a zero não mostrar quantidade de like
      if(likers === 0){
      return;
      }
     
       //senão mostrar o like
       return(
        
        <Text style={styles.like}>{likers} { likers > 1 ? 'curtidas' : 'curtida'}</Text>
       );
    }

    return(
        <View>

            <View style={styles.viewPerfil}>

                 <Image 
                 source={{uri: props.data.imgperfil}}
                 style={styles.fotoPerfil} //Avatar da img
                />

                <Text style={styles.nomeUser}>
                  {props.data.nome}
                </Text>

            </View>

      {/* Imagem de publicação */}
            <Image 
              //cover - contain
                 resizeMode="contain" //encaixar a imagem toda no app
                 source={{uri: props.data.imgPublicacao}}
                 style={styles.fotoPublicacao}
                />

             
             {/* Area dos botão de like - comentario - send */}
             <View style={styles.areaBtn}>

                <TouchableOpacity>
                    <Image 
                     source={carregaIcon(props.data.likeada)}
                     style={styles.iconLike}
                     />
                </TouchableOpacity>


                <TouchableOpacity style={styles.btnSend}>
                    <Image 
                     source={require('../img/comment.png')}
                     style={styles.iconLike}

                     />
                </TouchableOpacity>


                <TouchableOpacity style={styles.btnSend}>
                    <Image 
                     source={require('../img/send.png')}
                     style={styles.iconLike}

                     />
                </TouchableOpacity>
             </View>

             {/* comando em javascript para aparecer os likes*/}
             {mostraLikes(props.data.likers)}

             <Text style={styles.nomeRodape}>
                 {props.data.nome}
             </Text>

             <Text style={styles.descRodape}>
                 {props.data.descricao}
             </Text>



            
        </View>

        
    );
}

const styles = StyleSheet.create({

    viewPerfil:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },

    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },

    nomeUser:{
        paddingLeft: 5,
        fontSize: 22,
        color: '#000',
    },

     fotoPublicacao:{
        
        height: 400,
        alignItems: 'center'
     },

     areaBtn:{
        flexDirection: 'row',
        padding: 5
     },

     iconLike:{
        width: 25,
        height: 25
     },
     
     btnSend:{
        paddingLeft: 5
     },

     like:{
        fontWeight: 'bold',
        marginLeft: 5
     },

     nomeRodape:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 5
     },

     descRodape:{
        fontSize: 14,
        paddingLeft: 5,
        paddingBottom: 15

     }





});