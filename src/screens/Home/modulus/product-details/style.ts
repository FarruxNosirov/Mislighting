import {COLORS} from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 50,
    backgroundColor: COLORS.white,
  },
  box1: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: '#3F3535',
    lineHeight: 40,
  },
  box1_title: {
    fontSize: 15,
    color: '#C8C8C8',
    lineHeight: 40,
  },
  border: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#7171712d',
    marginTop: 14,
    marginBottom: 14,
  },
  border2: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#7171712d',
  },
  box2: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box2_title_now: {
    fontSize: 24,
    lineHeight: 40,
    color: '#131313',
  },
  box2_title_old: {
    fontSize: 18,
    lineHeight: 40,
    color: '#C8C8C8',
  },
  box3: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  box3_title: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 40,
    color: COLORS.black,
  },
  box4: {
    paddingHorizontal: 15,
  },
  box4_title: {
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 40,
    color: COLORS.black,
  },
  box4_content: {
    position: 'relative',
    marginBottom: 13,
  },
  content_title: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    color: '#C8C8C8',
  },
  colors: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 11,
  },
  active: {
    width: 92,
    height: 33,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#84A9C0',
    borderStyle: 'solid',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  active_title: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    color: '#84A9C0',
  },
  box_noactive: {
    width: '100%',
    marginTop: 9,
    zIndex: 3,
    paddingBottom: 24,
  },
  value: {
    flexDirection: 'row',
    width: 163,
    height: 55,
    backgroundColor: '#d1d1d1',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box5: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box6: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brend: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 40,
    color: '#3F3535',
  },
  chiaro: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 40,
    color: '#C8C8C8',
  },
  render_container: {
    position: 'relative',
    width: '100%',
    marginTop: 29,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  button: {
    width: '80%',
    height: 42,
    borderRadius: 45,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.textColorBlue,
  },
  goBack: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    top: 0,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    zIndex: 4,
  },
  chatIcon: {
    position: 'absolute',
    right: 80,
  },
  icons: {
    width: 50,
    height: 44,
    backgroundColor: '#84A9C0',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerStyle: {
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  counter: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    width: '100%',
    height: 40,
    alignItems: 'center',
  },
  add_remov: {
    flexDirection: 'row',
    borderRadius: 8,
  },
  minus: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#84A9C0',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  plus: {
    padding: 10,
    backgroundColor: '#84A9C0',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  topBottom: {
    paddingHorizontal: 15,
    borderColor: COLORS.whiteGray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    margin: 0,
  },
  cartText: {
    color: COLORS.white,
    marginRight: 4,
    fontWeight: '700',
    fontSize: 15,
  },
  inactiveCartText: {
    color: '#84A9C0',
    marginRight: 8,
    fontWeight: '700',
    fontSize: 15,
  },
});