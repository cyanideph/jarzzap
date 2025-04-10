-- Insert all Philippine regions
INSERT INTO regions (id, name, code) VALUES
    ('11111111-1111-1111-1111-111111111111', 'National Capital Region', 'NCR'),
    ('22222222-2222-2222-2222-222222222222', 'Cordillera Administrative Region', 'CAR'),
    ('33333333-3333-3333-3333-333333333333', 'Ilocos Region', 'Region I'),
    ('44444444-4444-4444-4444-444444444444', 'Cagayan Valley', 'Region II'),
    ('55555555-5555-5555-5555-555555555555', 'Central Luzon', 'Region III'),
    ('66666666-6666-6666-6666-666666666666', 'CALABARZON', 'Region IV-A'),
    ('77777777-7777-7777-7777-777777777777', 'MIMAROPA', 'Region IV-B'),
    ('88888888-8888-8888-8888-888888888888', 'Bicol Region', 'Region V'),
    ('99999999-9999-9999-9999-999999999999', 'Western Visayas', 'Region VI'),
    ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Central Visayas', 'Region VII'),
    ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Eastern Visayas', 'Region VIII'),
    ('cccccccc-cccc-cccc-cccc-cccccccccccc', 'Zamboanga Peninsula', 'Region IX'),
    ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'Northern Mindanao', 'Region X'),
    ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', 'Davao Region', 'Region XI'),
    ('ffffffff-ffff-ffff-ffff-ffffffffffff', 'SOCCSKSARGEN', 'Region XII'),
    ('gggggggg-gggg-gggg-gggg-gggggggggggg', 'Caraga', 'Region XIII'),
    ('hhhhhhhh-hhhh-hhhh-hhhh-hhhhhhhhhhhh', 'Bangsamoro Autonomous Region in Muslim Mindanao', 'BARMM');

-- Insert all provinces for each region
INSERT INTO provinces (id, name, code, region_id) VALUES
    -- NCR
    ('11111111-1111-1111-1111-111111111111', 'Manila', 'MNL', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111112', 'Quezon City', 'QC', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111113', 'Caloocan', 'CLK', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111114', 'Las Piñas', 'LPI', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111115', 'Makati', 'MKT', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111116', 'Malabon', 'MLB', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111117', 'Mandaluyong', 'MND', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111118', 'Marikina', 'MRK', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111119', 'Muntinlupa', 'MNT', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111120', 'Navotas', 'NVT', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111121', 'Parañaque', 'PRQ', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111122', 'Pasay', 'PSY', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111123', 'Pasig', 'PSG', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111124', 'San Juan', 'SJN', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111125', 'Taguig', 'TGG', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111126', 'Valenzuela', 'VLZ', '11111111-1111-1111-1111-111111111111'),
    ('11111111-1111-1111-1111-111111111127', 'Pateros', 'PTR', '11111111-1111-1111-1111-111111111111'),

    -- CAR
    ('22222222-2222-2222-2222-222222222221', 'Abra', 'ABR', '22222222-2222-2222-2222-222222222222'),
    ('22222222-2222-2222-2222-222222222222', 'Apayao', 'APA', '22222222-2222-2222-2222-222222222222'),
    ('22222222-2222-2222-2222-222222222223', 'Benguet', 'BEN', '22222222-2222-2222-2222-222222222222'),
    ('22222222-2222-2222-2222-222222222224', 'Ifugao', 'IFU', '22222222-2222-2222-2222-222222222222'),
    ('22222222-2222-2222-2222-222222222225', 'Kalinga', 'KAL', '22222222-2222-2222-2222-222222222222'),
    ('22222222-2222-2222-2222-222222222226', 'Mountain Province', 'MOU', '22222222-2222-2222-2222-222222222222'),
    ('22222222-2222-2222-2222-222222222227', 'Baguio', 'BAG', '22222222-2222-2222-2222-222222222222'),

    -- Region I
    ('33333333-3333-3333-3333-333333333331', 'Ilocos Norte', 'ILN', '33333333-3333-3333-3333-333333333333'),
    ('33333333-3333-3333-3333-333333333332', 'Ilocos Sur', 'ILS', '33333333-3333-3333-3333-333333333333'),
    ('33333333-3333-3333-3333-333333333333', 'La Union', 'LUN', '33333333-3333-3333-3333-333333333333'),
    ('33333333-3333-3333-3333-333333333334', 'Pangasinan', 'PAN', '33333333-3333-3333-3333-333333333333'),

    -- Region II
    ('44444444-4444-4444-4444-444444444441', 'Batanes', 'BTN', '44444444-4444-4444-4444-444444444444'),
    ('44444444-4444-4444-4444-444444444442', 'Cagayan', 'CAG', '44444444-4444-4444-4444-444444444444'),
    ('44444444-4444-4444-4444-444444444443', 'Isabela', 'ISA', '44444444-4444-4444-4444-444444444444'),
    ('44444444-4444-4444-4444-444444444444', 'Nueva Vizcaya', 'NUV', '44444444-4444-4444-4444-444444444444'),
    ('44444444-4444-4444-4444-444444444445', 'Quirino', 'QUI', '44444444-4444-4444-4444-444444444444'),

    -- Region III
    ('55555555-5555-5555-5555-555555555551', 'Aurora', 'AUR', '55555555-5555-5555-5555-555555555555'),
    ('55555555-5555-5555-5555-555555555552', 'Bataan', 'BAN', '55555555-5555-5555-5555-555555555555'),
    ('55555555-5555-5555-5555-555555555553', 'Bulacan', 'BUL', '55555555-5555-5555-5555-555555555555'),
    ('55555555-5555-5555-5555-555555555554', 'Nueva Ecija', 'NUE', '55555555-5555-5555-5555-555555555555'),
    ('55555555-5555-5555-5555-555555555555', 'Pampanga', 'PAM', '55555555-5555-5555-5555-555555555555'),
    ('55555555-5555-5555-5555-555555555556', 'Tarlac', 'TAR', '55555555-5555-5555-5555-555555555555'),
    ('55555555-5555-5555-5555-555555555557', 'Zambales', 'ZMB', '55555555-5555-5555-5555-555555555555'),

    -- Region IV-A (CALABARZON)
    ('66666666-6666-6666-6666-666666666661', 'Batangas', 'BTG', '66666666-6666-6666-6666-666666666666'),
    ('66666666-6666-6666-6666-666666666662', 'Cavite', 'CAV', '66666666-6666-6666-6666-666666666666'),
    ('66666666-6666-6666-6666-666666666663', 'Laguna', 'LAG', '66666666-6666-6666-6666-666666666666'),
    ('66666666-6666-6666-6666-666666666664', 'Quezon', 'QUE', '66666666-6666-6666-6666-666666666666'),
    ('66666666-6666-6666-6666-666666666665', 'Rizal', 'RIZ', '66666666-6666-6666-6666-666666666666'),

    -- Region IV-B (MIMAROPA)
    ('77777777-7777-7777-7777-777777777771', 'Marinduque', 'MAD', '77777777-7777-7777-7777-777777777777'),
    ('77777777-7777-7777-7777-777777777772', 'Occidental Mindoro', 'MDC', '77777777-7777-7777-7777-777777777777'),
    ('77777777-7777-7777-7777-777777777773', 'Oriental Mindoro', 'MDR', '77777777-7777-7777-7777-777777777777'),
    ('77777777-7777-7777-7777-777777777774', 'Palawan', 'PLW', '77777777-7777-7777-7777-777777777777'),
    ('77777777-7777-7777-7777-777777777775', 'Romblon', 'ROM', '77777777-7777-7777-7777-777777777777'),

    -- Region V (Bicol)
    ('88888888-8888-8888-8888-888888888881', 'Albay', 'ALB', '88888888-8888-8888-8888-888888888888'),
    ('88888888-8888-8888-8888-888888888882', 'Camarines Norte', 'CAN', '88888888-8888-8888-8888-888888888888'),
    ('88888888-8888-8888-8888-888888888883', 'Camarines Sur', 'CAS', '88888888-8888-8888-8888-888888888888'),
    ('88888888-8888-8888-8888-888888888884', 'Catanduanes', 'CAT', '88888888-8888-8888-8888-888888888888'),
    ('88888888-8888-8888-8888-888888888885', 'Masbate', 'MAS', '88888888-8888-8888-8888-888888888888'),
    ('88888888-8888-8888-8888-888888888886', 'Sorsogon', 'SOR', '88888888-8888-8888-8888-888888888888'),

    -- Region VI (Western Visayas)
    ('99999999-9999-9999-9999-999999999991', 'Aklan', 'AKL', '99999999-9999-9999-9999-999999999999'),
    ('99999999-9999-9999-9999-999999999992', 'Antique', 'ANT', '99999999-9999-9999-9999-999999999999'),
    ('99999999-9999-9999-9999-999999999993', 'Capiz', 'CAP', '99999999-9999-9999-9999-999999999999'),
    ('99999999-9999-9999-9999-999999999994', 'Guimaras', 'GUI', '99999999-9999-9999-9999-999999999999'),
    ('99999999-9999-9999-9999-999999999995', 'Iloilo', 'ILI', '99999999-9999-9999-9999-999999999999'),
    ('99999999-9999-9999-9999-999999999996', 'Negros Occidental', 'NEC', '99999999-9999-9999-9999-999999999999'),

    -- Region VII (Central Visayas)
    ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa1', 'Bohol', 'BOH', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'),
    ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa2', 'Cebu', 'CEB', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'),
    ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa3', 'Negros Oriental', 'NER', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'),
    ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaa4', 'Siquijor', 'SIG', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'),

    -- Region VIII (Eastern Visayas)
    ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb1', 'Biliran', 'BIL', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'),
    ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb2', 'Eastern Samar', 'EAS', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'),
    ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb3', 'Leyte', 'LEY', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'),
    ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb4', 'Northern Samar', 'NSA', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'),
    ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb5', 'Samar', 'WSA', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'),
    ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbb6', 'Southern Leyte', 'SLE', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'),

    -- Region IX (Zamboanga Peninsula)
    ('cccccccc-cccc-cccc-cccc-ccccccccccc1', 'Zamboanga del Norte', 'ZAN', 'cccccccc-cccc-cccc-cccc-cccccccccccc'),
    ('cccccccc-cccc-cccc-cccc-ccccccccccc2', 'Zamboanga del Sur', 'ZAS', 'cccccccc-cccc-cccc-cccc-cccccccccccc'),
    ('cccccccc-cccc-cccc-cccc-ccccccccccc3', 'Zamboanga Sibugay', 'ZSI', 'cccccccc-cccc-cccc-cccc-cccccccccccc'),

    -- Region X (Northern Mindanao)
    ('dddddddd-dddd-dddd-dddd-ddddddddddd1', 'Bukidnon', 'BUK', 'dddddddd-dddd-dddd-dddd-dddddddddddd'),
    ('dddddddd-dddd-dddd-dddd-ddddddddddd2', 'Camiguin', 'CAM', 'dddddddd-dddd-dddd-dddd-dddddddddddd'),
    ('dddddddd-dddd-dddd-dddd-ddddddddddd3', 'Lanao del Norte', 'LAN', 'dddddddd-dddd-dddd-dddd-dddddddddddd'),
    ('dddddddd-dddd-dddd-dddd-ddddddddddd4', 'Misamis Occidental', 'MSC', 'dddddddd-dddd-dddd-dddd-dddddddddddd'),
    ('dddddddd-dddd-dddd-dddd-ddddddddddd5', 'Misamis Oriental', 'MSR', 'dddddddd-dddd-dddd-dddd-dddddddddddd'),

    -- Region XI (Davao)
    ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee1', 'Davao de Oro', 'DVO', 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee'),
    ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee2', 'Davao del Norte', 'DAV', 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee'),
    ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee3', 'Davao del Sur', 'DAS', 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee'),
    ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee4', 'Davao Occidental', 'DAC', 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee'),
    ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeee5', 'Davao Oriental', 'DAO', 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee'),

    -- Region XII (SOCCSKSARGEN)
    ('ffffffff-ffff-ffff-ffff-fffffffffff1', 'Cotabato', 'NCO', 'ffffffff-ffff-ffff-ffff-ffffffffffff'),
    ('ffffffff-ffff-ffff-ffff-fffffffffff2', 'Sarangani', 'SAR', 'ffffffff-ffff-ffff-ffff-ffffffffffff'),
    ('ffffffff-ffff-ffff-ffff-fffffffffff3', 'South Cotabato', 'SCO', 'ffffffff-ffff-ffff-ffff-ffffffffffff'),
    ('ffffffff-ffff-ffff-ffff-fffffffffff4', 'Sultan Kudarat', 'SUK', 'ffffffff-ffff-ffff-ffff-ffffffffffff'),

    -- Region XIII (Caraga)
    ('gggggggg-gggg-gggg-gggg-ggggggggggg1', 'Agusan del Norte', 'AGN', 'gggggggg-gggg-gggg-gggg-gggggggggggg'),
    ('gggggggg-gggg-gggg-gggg-ggggggggggg2', 'Agusan del Sur', 'AGS', 'gggggggg-gggg-gggg-gggg-gggggggggggg'),
    ('gggggggg-gggg-gggg-gggg-ggggggggggg3', 'Dinagat Islands', 'DIN', 'gggggggg-gggg-gggg-gggg-gggggggggggg'),
    ('gggggggg-gggg-gggg-gggg-ggggggggggg4', 'Surigao del Norte', 'SUN', 'gggggggg-gggg-gggg-gggg-gggggggggggg'),
    ('gggggggg-gggg-gggg-gggg-ggggggggggg5', 'Surigao del Sur', 'SUR', 'gggggggg-gggg-gggg-gggg-gggggggggggg'),

    -- BARMM
    ('hhhhhhhh-hhhh-hhhh-hhhh-hhhhhhhhhhh1', 'Basilan', 'BAS', 'hhhhhhhh-hhhh-hhhh-hhhh-hhhhhhhhhhhh'),
    ('hhhhhhhh-hhhh-hhhh-hhhh-hhhhhhhhhhh2', 'Lanao del Sur', 'LAS', 'hhhhhhhh-hhhh-hhhh-hhhh-hhhhhhhhhhhh'),
    ('hhhhhhhh-hhhh-hhhh-hhhh-hhhhhhhhhhh3', 'Maguindanao', 'MAG', 'hhhhhhhh-hhhh-hhhh-hhhh-hhhhhhhhhhhh'),
    ('hhhhhhhh-hhhh-hhhh-hhhh-hhhhhhhhhhh4', 'Sulu', 'SLU', 'hhhhhhhh-hhhh-hhhh-hhhh-hhhhhhhhhhhh'),
    ('hhhhhhhh-hhhh-hhhh-hhhh-hhhhhhhhhhh5', 'Tawi-Tawi', 'TAW', 'hhhhhhhh-hhhh-hhhh-hhhh-hhhhhhhhhhhh');

-- Insert sample users
INSERT INTO profiles (id, mobile_number, display_name, region_id, province_id) VALUES
    ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '+639123456789', 'John Doe', '11111111-1111-1111-1111-111111111111', '11111111-1111-1111-1111-111111111111'),
    ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '+639234567890', 'Jane Smith', '11111111-1111-1111-1111-111111111111', '11111111-1111-1111-1111-111111111112'),
    ('cccccccc-cccc-cccc-cccc-cccccccccccc', '+639345678901', 'Mike Johnson', '22222222-2222-2222-2222-222222222222', '22222222-2222-2222-2222-222222222221');

-- Insert sample settings
INSERT INTO settings (user_id, theme, notifications, auto_message_display, offline_delivery) VALUES
    ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'light', true, true, 'server'),
    ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'dark', true, false, 'email'),
    ('cccccccc-cccc-cccc-cccc-cccccccccccc', 'light', false, true, 'sms');

-- Insert sample chatrooms
INSERT INTO chatrooms (id, name, is_group, created_by) VALUES
    ('11111111-1111-1111-1111-111111111111', 'General Chat', true, 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'),
    ('22222222-2222-2222-2222-222222222222', 'Team Updates', true, 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'),
    ('33333333-3333-3333-3333-333333333333', NULL, false, 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa');

-- Insert sample chatroom members
INSERT INTO chatroom_members (chatroom_id, user_id) VALUES
    -- General Chat members
    ('11111111-1111-1111-1111-111111111111', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'),
    ('11111111-1111-1111-1111-111111111111', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'),
    ('11111111-1111-1111-1111-111111111111', 'cccccccc-cccc-cccc-cccc-cccccccccccc'),
    
    -- Team Updates members
    ('22222222-2222-2222-2222-222222222222', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'),
    ('22222222-2222-2222-2222-222222222222', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'),
    
    -- Private chat members
    ('33333333-3333-3333-3333-333333333333', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'),
    ('33333333-3333-3333-3333-333333333333', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb');

-- Insert sample messages
INSERT INTO messages (chatroom_id, sender_id, content, type) VALUES
    -- General Chat messages
    ('11111111-1111-1111-1111-111111111111', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Hello everyone!', 'text'),
    ('11111111-1111-1111-1111-111111111111', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Hi there!', 'text'),
    ('11111111-1111-1111-1111-111111111111', 'cccccccc-cccc-cccc-cccc-cccccccccccc', 'Good morning!', 'text'),
    
    -- Team Updates messages
    ('22222222-2222-2222-2222-222222222222', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Meeting at 2 PM', 'text'),
    ('22222222-2222-2222-2222-222222222222', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Got it, thanks!', 'text'),
    
    -- Private chat messages
    ('33333333-3333-3333-3333-333333333333', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Hey, how are you?', 'text'),
    ('33333333-3333-3333-3333-333333333333', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'I'm good, thanks!', 'text');

-- Insert sample message status
INSERT INTO message_status (message_id, user_id, is_read, read_at) VALUES
    -- Mark some messages as read
    ('11111111-1111-1111-1111-111111111111', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', true, NOW()),
    ('11111111-1111-1111-1111-111111111112', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', true, NOW()),
    ('11111111-1111-1111-1111-111111111113', 'cccccccc-cccc-cccc-cccc-cccccccccccc', true, NOW()); 