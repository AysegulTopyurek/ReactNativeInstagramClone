import ReadMore from "@fawazahmed/react-native-read-more";
import dayjs from "dayjs";
import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { BookMark, Comment, Dots, Heart, Share } from "../../icons";
import FitImage from "./FitImage";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
function Post({ post }) {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image style={styles.avatar} source={{ uri: post.user.avatar }} />
          <Text style={styles.title}>{post.user.name}</Text>
        </View>
        <Dots size={20} fill="#262626" />
      </View>
      <FitImage src={post.image} />
      <View style={styles.content}>
        <View style={styles.actions}>
          <View style={styles.leftactions}>
            <TouchableOpacity style={styles.action} activeOpacity={0.7}>
              <Heart size={24} fill="#222" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} activeOpacity={0.7}>
              <Comment size={24} fill="#222" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} activeOpacity={0.7}>
              <Share size={24} fill="#222" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.action} activeOpacity={0.7}>
            <BookMark size={24} fill="#222" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.likes}>{post.likes} Likes</Text>
        </View>
        <ReadMore
          numberOfLines={2}
          seeMoreStyle={{ color: "#999", fontWeight: "600" }}
          seeLessStyle={{ color: "#999", fontWeight: "600" }}
          seeMoreText={"more"}
          seeLessText={"less"}
        >
          <Text>
            <Text style={styles.user}>{post.user.name}</Text> {post.description}
          </Text>
        </ReadMore>
        <TouchableOpacity style={{ paddingVertical: 8 }} activeOpacity={0.7}>
          <Text style={styles.comments}>View all {post.comments} comments</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.date}>{dayjs(post.date).fromNow()}</Text>
          <Text style={styles.translation}>See Translation</Text>
        </View>
      </View>
    </View>
  );
}
export default Post;

const styles = StyleSheet.create({
  post: {
    marginBottom: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 49,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  username: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  content: {
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  leftactions: {
    flexDirection: "row",
  },
  action: {
    marginRight: 15,
  },
  likes: {
    fontWeight: "600",
  },
  user: {
    fontWeight: "600",
  },
  comments: {
    opacity: 0.5,
  },
  date: {
    opacity: 0.5,
    fontSize: 12,
  },
  translation: {
    fontWeight: "600",
    fontSize: 12,
    marginLeft: 10,
  },
});
