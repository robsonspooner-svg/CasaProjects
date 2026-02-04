import { NextRequest, NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['firstName', 'email', 'phone', 'projectType', 'buildingType'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get Supabase client
    const supabase = getServiceClient();

    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.log('Supabase not configured - logging lead to console');
      console.log('New lead:', body);

      // Return success even if Supabase isn't configured (for development)
      return NextResponse.json({
        success: true,
        message: 'Quote request received (Supabase not configured)',
      });
    }

    // Insert into pm_leads table
    const { data, error } = await supabase
      .from('pm_leads')
      .insert({
        first_name: body.firstName,
        last_name: body.lastName,
        email: body.email,
        phone: body.phone,
        company: body.company || null,
        project_type: body.projectType,
        building_type: body.buildingType,
        address: body.address || null,
        number_of_units: body.numberOfUnits || null,
        estimated_value: body.estimatedValue || null,
        timeline: body.timeline || null,
        services_required: body.servicesRequired || null,
        description: body.description || null,
        how_heard: body.howHeard || null,
        status: 'new',
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save quote request' },
        { status: 500 }
      );
    }

    // TODO: Send notification email via Resend
    // This can be added once Resend is configured

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully',
      id: data?.id,
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
