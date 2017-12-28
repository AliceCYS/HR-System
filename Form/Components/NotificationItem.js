import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NotificationItem extends React.Component {
  render() {
    let statusColor = "grey";
    if (this.props.status === 'Pending') {
      statusColor = "orange";
    } else if (this.props.status === 'Approved') {
      statusColor = "green";
    } else if (this.props.status === 'Rejected') {
      statusColor = "red";
    }
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <View style={styles.approver}>
            <Text style={{ color: 'grey' }}>for {this.props.approver}</Text>
          </View>
          <View style={styles.status}>
            <Text style={{ color: statusColor }}>{this.props.status}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text>Reason: {this.props.reason}</Text>
          <Text>Remarks: {this.props.remarks}</Text>
        </View>
        <View style={styles.submitter}>
          <Text style={{ color: 'grey' }}>by {this.props.submitter} on {this.props.date}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    marginTop: 10,
    borderRadius: 5
  },
  statusBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'silver',
    marginLeft: -8,
    marginRight: -8,
    paddingBottom: 8
  },
  approver: {
    marginLeft: 8,
    color: 'grey'
  },
  status: {
    marginRight: 8
  },
  content: {
    paddingTop: 8
  },
  submitter: {
    alignItems: 'flex-end',
    color: 'grey'
  }
});
