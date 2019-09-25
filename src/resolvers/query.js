const resolvers = {
    Query: {
        productpricing: (parent, args, context, info) => {
            return context.prisma.productPricings()
        },
        agency: (parent, args, context, info) => {
            return context.prisma.agencies()
        },
        product: (parent, args, context, info) => {
            return context.prisma.products()
        },
    },
    Mutation: {
        createagency: (parent, args, context, info) => {
            return context.prisma.createAgency({
                amount: args.input.amount,
                apiKey: args.input.apiKey,
                apiToken: args.input.apiToken,
                billingAddress: args.input.billingAddress,
                billingAddressOptional: args.input.billingAddressOptional,
                billingContact: args.input.billingContact,
                billingEmail: args.input.billingEmail,
                cityId: args.input.cityId,
                countryId: args.input.countryId,
                name: args.input.name,
                ownerId: args.input.ownerId,
                stateId: args.input.stateId,
                status: args.input.status
            })
        },
        createproduct: (parent, args, context, info) => {
            return context.prisma.createProduct({
                description: args.input.description,
                name: args.input.name,
                status: args.input.status,
            })
        },
        createproductpricing: (parent, args, context, info) => {
            return context.prisma.createProductPricing({
                agency: args.input.agency,
                apiId: args.input.apiId,
                planId: args.input.planId,
                price: args.input.price,
                product: args.input.product
            })
        }
    }
}

module.exports = resolvers