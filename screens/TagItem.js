import React from 'react'
import {Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TagItem = ({ tagName, onRemoveTag }) => {
    return (
        <TouchableOpacity
            onPress={onRemoveTag}
            style={{
                paddingVertical: 4,
                paddingHorizontal: 8,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: "#F5F6F5",
                borderWidth: 1,
                borderColor: "#e9e9e9",
                margin: 4,
                borderRadius: 3
            }}
            >
            <MaterialCommunityIcons name="close" size={14} color="black" />
            <Text 
                style={{
                    fontSize: 14,
                    color : '#333',
                    paddingLeft: 4
                }}
                >
                {tagName}
            </Text>
        </TouchableOpacity>
    )
}

export default TagItem;

