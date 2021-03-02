import React from 'react';
import { Alert, Text, TextInput, StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {ComponentName} from './components/screen10';

export default class App extends React.Component {


    constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {

            size: "4:5",
            items: [
                {
                    label: 'Facebook/Instagram/Pinterest/TikTok, 4:5',
                    value: '4:5',
                },
                {
                    label: 'Facebook/YouTube/Wechat/Weibo, 3:2',
                    value: '3:2',
                },
                {
                    label: 'Facebook/Instagram/Pinterest/TikTok, 4:4',
                    value: '4:4',
                },
                {
                    label: 'YouTube, 16:9',
                    value: '16:9',
                },
                {
                    label: 'Instagram/TikTok, 9:16',
                    value: '9:16',
                },
                                {
                    label: 'Instagram/TikTok, 9:16',
                    value: '9:16',
                }
            ],
        };
    }


    render() 

{
        return (
            <View style={{backgroundColor: "#172B4D", marginBottom: -7}}>

                <View style={{ paddingVertical: 5 }} />

                <Text style={{textAlign: 'center', color: '#fff', fontSize: 22, paddingTop:10}}> Target channel and video resolution: </Text>
                <RNPickerSelect
                    placeholder={{
                        label: "Facebook/Instagram/Pinterest/TikTok, 4:5",
                        value: "4:5",
                    }}
                    items={this.state.items}
                    onValueChange={(value) => {
                        this.setState({
                            size: value
                        });
                        
                    }}
                    onUpArrow={() => {
                        this.inputRefs.name.focus();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.picker2.togglePicker();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.size}
                    ref={(el) => {
                        this.inputRefs.picker = el;
                    }}
                />
                <Text>{this.state.size}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});
