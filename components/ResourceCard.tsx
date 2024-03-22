import { Box, HStack, Icon, Pressable, Text, VStack } from '@gluestack-ui/themed'
import { Colors } from '../Theme'
import { memo, useEffect, useState } from 'react'
import {FadeIn} from "./FadeIn";
import {Bet} from "../ProfileScreen";

type ResourceCardProps = {
    bet: Bet
}

const getGateStatusColor = (status: boolean) => {
    return status ? statusColors.open : statusColors.closed
}

const statusColors = {
    open: {
        backgroundColor: Colors.emerald100,
        borderColor: Colors.emerald300,
        textColor: Colors.emerald950,
    },
    closed: {
        backgroundColor: Colors.red100,
        borderColor: Colors.red200,
        textColor: Colors.red950,
    },
}

export const ResourceCard = ({
    bet
}: ResourceCardProps) => {

    // useEffect(() => {
    //     let mounted = true
    //
    //     userBaseRepository.getUserBase().then((base) => {
    //         if (mounted) {
    //             subscribeToUpdateCount(base, resource, setUpdateCount).then(
    //                 (unsubFunction) => {
    //                     setUnsubscribe(() => unsubFunction)
    //                 }
    //             )
    //         }
    //     })
    //
    //     // unsubscribe on dismount
    //     return () => {
    //         if (unsubscribe) unsubscribe()
    //         mounted = false
    //     }
    // }, [])

    // async function toggleIsFavorite() {
    //     await setIsResourceFavorite(bet, !isFavorite)
    // }

    return (
        <FadeIn>
                <Pressable>
                    <VStack
                        space='md'
                        p={16}
                        backgroundColor='white'
                        borderColor={Colors.zinc50}
                        borderRadius={12}
                        borderWidth={1}
                        shadowColor='#000'
                        shadowOffset={{ width: 0, height: 1 }}
                        shadowOpacity={0.18}
                        shadowRadius={1}
                        elevation={1}
                        width='100%'
                    >
                        <HStack
                            space='sm'
                            width='100%'
                            justifyContent='space-between'
                            alignItems='flex-start'
                        >
                            <Text
                                fontFamily='Army-Bold'
                                color='black'
                                fontSize={18}
                                maxWidth='80%'
                            >
                                {bet.away} @ {bet.home}
                            </Text>
                            <HStack
                                space='sm'
                                alignItems='center'
                                marginLeft='auto'
                            >
                                {/*{isShowingBookmark && (*/}
                                {/*    <BookmarkButton*/}
                                {/*        toggleIsFavorite={toggleIsFavorite}*/}
                                {/*        isFavorite={isFavorite}*/}
                                {/*    />*/}
                                {/*)}*/}
                                {bet.odds}
                            </HStack>
                        </HStack>
                        {bet.expiration && (
                            <HStack space='md' alignItems='center'>
                                {/*<Clock8 size='20' color={Colors.zinc600} />*/}
                                <Text
                                    flexShrink={1}
                                    fontFamily='Army-Regular'
                                    fontSize={14}
                                    lineHeight={18}
                                    color={Colors.zinc800}
                                >
                                    Game Day: {bet.expiration.format("LLLL")}
                                </Text>
                            </HStack>
                        )}
                        {/*<VStack space='sm'>*/}
                        {/*    {resource.address.building && (*/}
                        {/*        <HStack space='md' alignItems='center'>*/}
                        {/*            <Landmark*/}
                        {/*                size='20'*/}
                        {/*                color={Colors.zinc600}*/}
                        {/*            />*/}
                        {/*            <Text*/}
                        {/*                fontFamily='Army-Regular'*/}
                        {/*                fontSize={14}*/}
                        {/*                color={Colors.zinc800}*/}
                        {/*            >*/}
                        {/*                {resource.address.building}*/}
                        {/*            </Text>*/}
                        {/*        </HStack>*/}
                        {/*    )}*/}

                        {/*    <HStack*/}
                        {/*        space='md'*/}
                        {/*        justifyContent='space-between'*/}
                        {/*        alignItems='center'*/}
                        {/*        width='100%'*/}
                        {/*    >*/}
                        {/*        <HStack*/}
                        {/*            space='md'*/}
                        {/*            alignItems='center'*/}
                        {/*            flexShrink={1}*/}
                        {/*            width='62%'*/}
                        {/*        >*/}
                        {/*            <MapPin size='20' color={Colors.zinc600} />*/}
                        {/*            <VStack>*/}
                        {/*                {resource.address.streetAddress &&*/}
                        {/*                    resource.address.streetAddress*/}
                        {/*                        .split('\n')*/}
                        {/*                        .map((line, index) => {*/}
                        {/*                            if (*/}
                        {/*                                line.trim().length === 0*/}
                        {/*                            )*/}
                        {/*                                return*/}
                        {/*                            return (*/}
                        {/*                                <Pressable*/}
                        {/*                                    key={index}*/}
                        {/*                                    onPress={(*/}
                        {/*                                        event: MouseEvent*/}
                        {/*                                    ) => {*/}
                        {/*                                        event.stopPropagation()*/}
                        {/*                                        event.preventDefault()*/}
                        {/*                                        setShowAddressModal(*/}
                        {/*                                            true*/}
                        {/*                                        )*/}
                        {/*                                    }}*/}
                        {/*                                >*/}
                        {/*                                    <Text*/}
                        {/*                                        flexShrink={1}*/}
                        {/*                                        fontFamily='Army-Regular'*/}
                        {/*                                        fontSize={14}*/}
                        {/*                                        lineHeight={17}*/}
                        {/*                                        textDecorationLine='underline'*/}
                        {/*                                        color={*/}
                        {/*                                            Colors.zinc800*/}
                        {/*                                        }*/}
                        {/*                                    >*/}
                        {/*                                        {line}*/}
                        {/*                                    </Text>*/}
                        {/*                                </Pressable>*/}
                        {/*                            )*/}
                        {/*                        })}*/}
                        {/*            </VStack>*/}
                        {/*        </HStack>*/}

                        {/*        {updateCount > 0 && (*/}
                        {/*            <MotiView*/}
                        {/*                from={{ opacity: 0, scale: 0.9 }}*/}
                        {/*                animate={{ opacity: 1, scale: 1 }}*/}
                        {/*                style={{ alignSelf: 'flex-end' }}*/}
                        {/*                transition={{*/}
                        {/*                    type: 'timing',*/}
                        {/*                    duration: 200,*/}
                        {/*                    easing: Easing.linear,*/}
                        {/*                }}*/}
                        {/*            >*/}
                        {/*                <Box*/}
                        {/*                    backgroundColor={Colors.zinc800}*/}
                        {/*                    borderRadius={8}*/}
                        {/*                    flexDirection='row'*/}
                        {/*                    alignItems='center'*/}
                        {/*                    justifyContent='center'*/}
                        {/*                    paddingHorizontal={8}*/}
                        {/*                >*/}
                        {/*                    <Text*/}
                        {/*                        flexShrink={1}*/}
                        {/*                        paddingLeft={1}*/}
                        {/*                        fontSize={14}*/}
                        {/*                        fontFamily='Army-Regular'*/}
                        {/*                        color='white'*/}
                        {/*                    >*/}
                        {/*                        {`${updateCount} update${*/}
                        {/*                            updateCount > 1 ? 's' : ''*/}
                        {/*                        }`}*/}
                        {/*                    </Text>*/}
                        {/*                </Box>*/}
                        {/*            </MotiView>*/}
                        {/*        )}*/}
                        {/*    </HStack>*/}
                        {/*</VStack>*/}
                        <HStack justifyContent='space-between'>
                            <HStack
                                gap={24}
                                alignItems='flex-start'
                            >
                            <VStack space='xs'>
                                <Text
                                    fontFamily='Army-Medium'
                                    fontSize={14}
                                    color={Colors.zinc600}
                                >
                                    Position
                                </Text>
                                <HStack
                                    alignItems='center'
                                    space='md'
                                >
                                    <Box
                                        justifyContent='center'
                                        paddingHorizontal={12}
                                        paddingVertical={1.5}
                                        borderRadius={8}
                                        borderWidth={1}
                                        borderColor={
                                            getGateStatusColor(
                                                bet.status
                                            ).borderColor
                                        }
                                        backgroundColor={
                                            getGateStatusColor(
                                                bet.status
                                            ).backgroundColor
                                        }
                                    >
                                        <Text
                                            fontFamily='Army-Medium'
                                            color={
                                                getGateStatusColor(
                                                    bet.status
                                                ).textColor
                                            }
                                            fontSize={14}
                                        >
                                            {bet.status
                                                ? 'Open'
                                                : 'Closed'}
                                        </Text>
                                    </Box>
                                </HStack>
                            </VStack>
                            </HStack>
                        </HStack>
                    </VStack>
                </Pressable>
        </FadeIn>
    )
}

export default memo(ResourceCard)
